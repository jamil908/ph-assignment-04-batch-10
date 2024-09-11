


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
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
))
