class CalcController {

    constructor() {

        this._operation = [];
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");



        this._currentDate;
        this.initialize();
        this.initButtonsEvents()



    }


    //Metodo que tudo que aconteçã na caculadora estará nesse método

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime()

        }, 1000)
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }


    clearAll() {
        this._operation = []

    }

    clearEntry() {
        this._operation.pop();
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1]
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value

    }

    isOperator(value) {
        return (['+', '-', '/', '*', '%'].indexOf(value) > -1)
    }

    pushOperation(value){
        this._operation.push(value);

        if( this._operation.length > 3){

            this.calc();

        }
    }

    calc(){        
        let last = this._operation.pop();

        let result = eval(this._operation.join(""))

        this._operation = [result, last]
        
        this.setLastNumberToDisplay()
    }

    setLastNumberToDisplay(){
        let lestNumber;

        for(let i = this._operation.length-1; i >= 0 ; i-- ){
            
            if(!this.isOperator(this._operation[i])){
                lestNumber = this._operation[i];
                break;
            }
        } 
        this.displayCalc = lestNumber;
    }


    addOperation(value) {

       // console.log("A", value, isNaN(this.getLastOperation()))

        if (isNaN(this.getLastOperation())) {
            //String

            if (this.isOperator(value)) {
                //Trocar o operador

                this.setLastOperation(value);


            } else if (isNaN(value)) {

                //Outra coisa
                console.log('Outra coisa:',value)

            } else {

                this.pushOperation(value);
                this.setLastNumberToDisplay()
            }


        } else {
            //Number

            if (this.isOperator(value)) {

                this. pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(parseInt(newValue));


                //Atualizar o meu Display 
                this.setLastNumberToDisplay();
            }

        }

    }

    setError() {
        this.displayCalc = "Error"
    }

    execBtn(valueBtn) {

        switch (valueBtn) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.addOperation('=');
                break;
            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(valueBtn));
                break;


            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g ");


        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace('btn-', '');

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer"
            })
        })
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    //Criar Getters e Setters para controlar como ele deve ser consultado(Get) ou mesmo alimentando(Set)
    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    get displayDate() {
        return this._dataEl.innerHTML;
    }

    set displayDate(value) {
        return this._dataEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}