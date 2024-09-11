




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

console.log(sendNotification('farhan34@yahoo.com'))
