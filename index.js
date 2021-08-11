const returnFirstTwoDrivers = function (drivers) { 
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
        return function(fare) {
            return integer * fare;
        };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selection) {
    return selection(arrayOfDrivers)};

// const returnFirstTwoDrivers = function (drivers) {
//     return drivers.slice(0, 2);
//   };