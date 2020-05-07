import {
  alphabetizePeoples,
  getDevelopers,
  getPeopleAges,
  checkIfIncludes,
  getPeopleArrayWithoutItem,
  addToBeginning,
  sortByNameArray,
  sortByAgeArray
} from "../examples/arrays";

const peopleArray = ["Zoran", "Sandra", "Lana"];

const peoples = [
  {
    name: "Zoran",
    age: 40,
    position: "Developer"
  },
  {
    name: "Sandra",
    age: 40,
    position: "Educator"
  },
  {
    name: "Lana",
    age: 9,
    position: "Child"
  }
];

function alphabetizedPeopleArray() {
  return alphabetizePeoples(peopleArray);
}

function developersArray() {
  return getDevelopers(peoples);
}

function sumAgesForNonDevelopers() {
  return getPeopleAges(peoples);
}

function checkIfArrayIncludes() {
  return checkIfIncludes(peopleArray);
}

function getReducedPeopleArray() {
  return getPeopleArrayWithoutItem(peopleArray, "Sandra");
}

function addToBeginningOfArray() {
  return addToBeginning(peopleArray);
}

function sortBy(type) {
  let result = undefined;

  switch (type) {
    case "name":
      result = sortByNameArray(peoples);
      break;
    case "age":
      result = sortByAgeArray(peoples);
      break;

    default:
      break;
  }

  return result;
}

function getNamesFromArrayOfObject() {
  const namesArray = [];
  const indexArray = [];

  peoples.forEach((element, index, arry) => {
    namesArray.push(element.name);
    indexArray.push(index);
  });

  return alphabetizePeoples(namesArray);
}

function getNamesFromArrayOfObjectMap() {
  const namesArray = peoples.map(element => element.name);

  return alphabetizePeoples(namesArray);
}

function checkIfAnyUnderageInArray() {
  const anyUnderage = peoples.some(person => person.age <= 18);

  return anyUnderage;
}

function sumParticularPropertyAndCalculateAverageInArray() {
  const sum = peoples.map(element => element.age).reduce((a, b) => a + b, 0);

  const average = sum / peoples.length;

  return average;
}

function retreiveSubsetOfArray() {
  const newArray = peoples.filter(element => element.age < 40);

  return newArray;
}

function findElementInArray() {
  const result = peoples.find(element => element.position === "Child");

  return result;
}

export {
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
};
