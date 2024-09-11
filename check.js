function checkName(name){
    if(typeof name !== 'string' || typeof name === 'number' || typeof name === Array.isArray){
        return  'invalid string'
    }
    let lastLetter = name.slice(-1).toLowerCase()
    let result = false
    let checkArray =['a','e','i','o','u','w','y']
    for(char of checkArray){
        if(char === lastLetter){
            result =true
        }
           
    }
    return result? "good name" : "bad name"
    
    
}
console.log(checkName('ads'))