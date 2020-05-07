function alphabetizePeoples(peoples) {
  return [...peoples].sort();
}

function sortByNameArray(peoples) {
  return [...peoples].sort(sortByName);
}

function sortByAgeArray(peoples) {
  return [...peoples].sort(sortByAge);
}

function sortByAge(a, b) {
  if (a.age === b.age) {
    return 0;
  }

  return a.age - b.age;
}
const sortByName = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }

  return a.name > b.name ? 1 : -1;
};

function getDevelopers(peoples) {
  return peoples.filter(p => p.position == "Developer");
}

function getPeopleAges(peoples) {
  const objects = Object.values(peoples);
  let sum = 0;

  for (let index = 0; index < objects.length; index++) {
    const element = objects[index];

    if (element.position !== "Developer") {
      sum += element.age;
    }
  }

  return sum;
}

function checkIfIncludes(peoples) {
  return peoples.includes("Zoran");
}

function getPeopleArrayWithoutItem(items, removable) {
  const index = items.indexOf(removable);

  return [...items.slice(0, index), ...items.slice(index + 1)];
}

function addToBeginning(peoples) {
  const array = ["Branko", ...peoples];

  return array;
}

export {
  alphabetizePeoples,
  sortByNameArray,
  sortByAgeArray,
  getDevelopers,
  getPeopleAges,
  checkIfIncludes,
  getPeopleArrayWithoutItem,
  addToBeginning
};
