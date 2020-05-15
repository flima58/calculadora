class CalcController{
        
    constructor(){
        
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        


        this._currentDate;  
        this.initialize();
        this.initButtonsEvents()
       
    

    }


    //Metodo que tudo que aconteçã na caculadora estará nesse método

    initialize(){
        
        this.setDisplayDateTime();

        setInterval(()=>{
               
            this.setDisplayDateTime()
                
            }, 1000)
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        })
    }


    initButtonsEvents(){

       let buttons =  document.querySelectorAll("#buttons > g, #parts > g ");


       buttons.forEach((btn, index) =>{

                this.addEventListenerAll(btn,"click drag", e => {
                    console.log(btn.className.baseVal.replace('btn-',''));

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = "pointer"
            })
       })
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",
            month:"long",
            year:"numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    //Criar Getters e Setters para controlar como ele deve ser consultado(Get) ou mesmo alimentando(Set)
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        return this._dataEl.innerHTML = value;
    }

    get displayCalc(){      
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){    
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}