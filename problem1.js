


function calculateTax(income, expenses) {

    
    if(income>=0 && expenses>=0 && income>=expenses){
        let difference = income - expenses
        let text = difference * .20
        return text

    }else{
        return "Invalid Input" 
    }
    
}
console.log(calculateTax(6000, -1500))
