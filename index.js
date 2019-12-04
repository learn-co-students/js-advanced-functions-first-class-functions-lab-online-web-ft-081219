// Code your solution in this file!
function returnFirstTwoDrivers(arrayDrivers) {
  const whatever = (array => array.slice(0,2))
  return whatever(arrayDrivers)
}

function returnLastTwoDrivers(arrayDrivers) {
  const drivers = function(array) {
    return array.slice(array.length-2);
  }
  return drivers(arrayDrivers)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

function fareDoubler(int) {
  const doubler = createFareMultiplier(2);
  return doubler(int)
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}

function selectDifferentDrivers(driverArray, selectingFn) {
  return selectingFn(driverArray);
}