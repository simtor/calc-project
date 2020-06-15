class Calculator{
    constructor(previousoperandtextElement, currentorerandtextElement){
    this.previousoperandtextElement = previousoperandtextElement
    this.currentorerandtextElement = currentorerandtextElement
    this.clear()
}
clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
delete(){

}

appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString() 

}

choosenOperation(operation){
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''


}

compute(){

}

updateDisplay(){
    this.currentorerandtextElement.innerText = this.currentOperand
    this.previousoperandtextElement.innerText = this.previousOperand
}

}

const numberButttons = document.querySelectionAll('[data-number]')
const operationButttons = document.querySelectionAll('[data-operation]')
const equalsbutton = Document.queryselector('[data-equals]')
const deletebutton = Document.queryselector('[data-delete]')
const allcleanbutton = Document.queryselector('[data-all-clear]')
const previousoperandtextElement = Document.queryselector('[data-previous-operand]')
const currentorerandtextElement = Document.queryselector('[data-current-orerand]')

const calculator = new Calculator(previousoperandtextElement, currentorerandtextElement)

numberButttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});