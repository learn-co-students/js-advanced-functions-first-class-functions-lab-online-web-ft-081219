// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)


const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(int) {
  return function(myNum) {
    return int * myNum
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, aFunction) {
  return aFunction(arrayOfDrivers);
}