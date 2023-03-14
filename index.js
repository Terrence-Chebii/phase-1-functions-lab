// Code your solution in this file
function distanceFromHqInBlocks(num1, num2 = 42) {
    if (num1 > num2) {
return num1 - num2;
 } else {
    return num2 - num1;
 }
}
console.log(distanceFromHqInBlocks())

function distanceFromHqInFeet(num1, num2 ,num3 = 264) {
    distanceFromHqInBlocks(num1, num2 = 42);
    if (num1 > num2) {
return (num1 - num2)*num3;
 } else {
    return (num2 - num1)*num3;
 }
}
console.log(distanceFromHqInFeet())

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start)*264;
    } else {
        return (start-destination)*264;
    }
}
console.log(distanceTravelledInFeet)

function calculatesFarePrice(start , destination){
    if((destination - start) <= 400){
        return 0;
    }else if (2000 >= (destination - start) > 400){
        return destination/200 - start/200;
    }else if (2500 >= (destination - start) > 2000){
        return 25;
    }else if((destination - start) > 2500){
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(0 , 512))

/*function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
   if ((destination - start)*264 <= 400) {
    return 'This one is on me';
    } else if ((destination - start)*264 > 400, (destination - start)*264 <= 2000) {
        return (((destination - start)*264) - 400)*2;
    } else if ((destination - start)*264 > 2000, (destination - start)*264 <= 2500) {
        return (((destination - start)*264) - 400)*2 + 25;
    } else if ((destination - start)*264 > 2500) {
        return 'cannot travel that far';
    } else {
        return '';
    }
}  */

