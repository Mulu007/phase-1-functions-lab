// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
   if (blockNumber > 42 ) {
    return blockNumber - 42;
   } else {
    return 42 - blockNumber;
   }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
        if (distanceTravelled <= 400) {
         return 0;
        } else if (distanceTravelled > 400 && distanceTravelled <=2000) {
         return (distanceTravelled - 400) * 0.02;
        } else if (distanceTravelled > 2000 && distanceTravelled <=2500) {
         return 25;
        } else {distanceTravelled > 2500} {
         return "cannot travel that far"
        }
}
    
    
