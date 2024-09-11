


function  waitingTime(waitingTimes, serialNumber  ) {

    if( !Array.isArray(waitingTimes) && typeof serialNumber !== 'number'){
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
console.log(waitingTime      (     [13, 2], 6    )    )
