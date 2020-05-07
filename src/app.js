import {
  alphabetizedPeopleArray,
  developersArray,
  sumAgesForNonDevelopers,
  checkIfArrayIncludes,
  getReducedPeopleArray,
  addToBeginningOfArray,
  sortBy,
  getNamesFromArrayOfObject,
  getNamesFromArrayOfObjectMap,
  checkIfAnyUnderageInArray,
  sumParticularPropertyAndCalculateAverageInArray,
  retreiveSubsetOfArray,
  findElementInArray
} from "./services/array.service";

import {
    getApiConfiguration,
    displayTokenStatus,
    apiConfig,
    copyObjectCopyingSimpleValues,
    deepCopyObject
} from "./examples/objects";

import {
  getSuppliers
} from "./examples/models";

// ARRAYS
console.log('%c ARRAYS', 'color:green');
console.log("AlphabetizedPeopleArray RESULT: ", JSON.stringify(alphabetizedPeopleArray()));
console.log("DevelopersArray RESULT: ", JSON.stringify(developersArray()));
console.log("SumAgesForNonDevelopers RESULT: ", JSON.stringify(sumAgesForNonDevelopers()));
console.log("CheckIfArrayIncludes RESULT: ", JSON.stringify(checkIfArrayIncludes()));
console.log("GetReducedPeopleArray RESULT: ", JSON.stringify(getReducedPeopleArray()));
console.log("AddToBeginningOfArray RESULT: ");
console.table([addToBeginningOfArray()]);
console.log("SortByName RESULT: ", JSON.stringify(sortBy("name")));
console.log("SortByAge RESULT: ", JSON.stringify(sortBy("age")));
console.log("GetNamesFromArrayOfObject RESULT: ", JSON.stringify(getNamesFromArrayOfObject()));
console.log("GetNamesFromArrayOfObjectMap RESULT: ", JSON.stringify(getNamesFromArrayOfObjectMap()));
console.log("CheckIfAnyUnderageInArray RESULT: ", JSON.stringify(checkIfAnyUnderageInArray()));
console.log("SumParticularPropertyAndCalculateAverageInArray RESULT: ", JSON.stringify(sumParticularPropertyAndCalculateAverageInArray()));
console.log("RetreiveSubsetOfArray RESULT: ", JSON.stringify(retreiveSubsetOfArray()));
console.log("FindElementInArray RESULT: ", JSON.stringify(findElementInArray()));

// OBJECTS
console.log('%c OBJECTS', 'color:green;');
console.log("GetApiConfiguration RESULT: ", JSON.stringify(getApiConfiguration(apiConfig)));
console.log("DisplayTokenStatus RESULT: ", JSON.stringify(displayTokenStatus(apiConfig)));
console.log("CopyObjectCopyingSimpleValues RESULT: ", JSON.stringify(copyObjectCopyingSimpleValues()));
console.log("DeepCopyObject RESULT: ", JSON.stringify(deepCopyObject()));

// CLASSES
console.log('%c CLASSES', 'color:green');
console.log("CallClassMethod RESULT: ", JSON.stringify(getSuppliers()));



