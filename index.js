// Code your solution in this file!
const returnFirstTwoDrivers = (drives) => drives.slice(0, 2)
const returnLastTwoDrivers = (drives) => drives.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => {
    return function(amount) {
        return number * amount
    }
}

const fareDoubler = (amount) => createFareMultiplier(2)(amount)
const fareTripler = (amount) => createFareMultiplier(3)(amount)

const selectDifferentDrivers = (arrayOfDrivers, callback) => callback(arrayOfDrivers)