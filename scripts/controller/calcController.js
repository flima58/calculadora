class CalcController{
        
    constructor(){

        this._displayCalc = "0";
        this._dataAtual;  

    }


    //Criar Getters e Setters para controlar como ele deve ser consultado(Get) ou mesmo alimentando(Set)
    get displayCalc(){      
        return this._displayCalc;
    }

    set displayCalc(valor){    
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(data){
        this._dataAtual = data;
    }
}