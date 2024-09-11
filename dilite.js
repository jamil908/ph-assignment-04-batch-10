function deleteInvalid(array){
    let numberArray = []
    for(let element of array){
        if(typeof element === 'number' && isNaN(element) ===false )
            numberArray.push(element)
    }
    return numberArray
}
console.log(deleteInvalid([1,null, undefined, 18, -19, NaN, '12', [1, 2], {obj: 'lala'}]))