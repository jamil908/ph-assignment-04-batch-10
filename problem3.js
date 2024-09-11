




function checkDigitsInName(name) {
    if(Array.isArray(name)){
        return 'Invalid Input'
    }
    let hasNumber =false
    for( let i = 0; i < name.length; i++){
        if(!isNaN(name[i] && name[i] !== '')){
            hasNumber=true
        }
    }
    if(typeof name === 'string'&& name === hasNumber ){
        return true
    }else{
        return false
    }
}


console.log(checkDigitsInName('!@#'))
 