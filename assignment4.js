

function calculateTax(income, expenses) {

    
    if(income>=0 && expenses>=0 && income>=expenses){
        let difference = income - expenses
        let text = difference * .20
        return text

    }else{
        return "Invalid Input" 
    }
    
}


function sendNotification(email) {
    let result = email
    if(!result.includes('@')){
        return 'Invalid Email'
    }
    let emailDivide =result.split('@')
    let userName = emailDivide[0]
    let domain = emailDivide[1]
    let makeConcat = userName + ' ' +'sent you an email from'+ ' ' + domain
    return makeConcat
   

}


function checkDigitsInName(name) {
   
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    let hasNumber =false
    for( let i = 0; i < name.length; i++){
        if(!isNaN(name[i] ) && name[i] !== ' '){
            hasNumber = true
            break
            
        }
        
    }
    return hasNumber
    
   
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object'){
        return 'Invalid Input'
    }
    let resultScore = obj.testScore + obj.schoolGrade
    let farmer = obj.isFFamily
    if (farmer === true){
        resultScore += 20
    }
     if(  resultScore >=80 ){
       return true
     }
      
     else{
        return false
     }


}


function  waitingTime(waitingTimes, serialNumber  ) {

    if( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input '
    }

    let average = 0;
    for( const waitingTime of waitingTimes){

        average = average + waitingTime;
      
    }
   
    let totalAverage = average / waitingTimes.length
    let total = Math.round(totalAverage)

    

    let count = waitingTimes.length
    let afterCount = serialNumber - count -1
     
    let remainingTime = total * afterCount
    return remainingTime
}

