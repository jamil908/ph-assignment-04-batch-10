


function password(obj){
    if(obj.name === undefined || obj.siteName === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !==4){
        return 'invalid'
    }
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(0)
    let passwordString = capitalSiteName+ '#' + obj.name + '@' + obj.birthYear

    return passwordString
}
console.log(password({name: "jamil",birthYear:1909,siteName:"google",}))