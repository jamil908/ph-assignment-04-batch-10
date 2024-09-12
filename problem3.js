




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


console.log(checkDigitsInName( ["Raj"]

))
 