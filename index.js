// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}


function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (myNum) {
        return num * myNum;
    }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, someFunction) {
    return someFunction(drivers);
}