// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  let newArray = [drivers[0], drivers[1]]
  return newArray
}

function returnLastTwoDrivers(drivers) {
  let newArray = [drivers[drivers.length-2], drivers[drivers.length-1]]
  return newArray
}

function selectingDrivers(drivers) {
  let newArray = [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)]
  return newArray
}
