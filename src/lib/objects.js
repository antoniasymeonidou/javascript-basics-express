const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  let sum = 0;
  let i = 0;
  for (i = 0; i < people.length; i++) {
    const person = people[i].age;
    sum += person;
  }
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce(friendName) {
      return `Hi ${friendName}, my name is ${this.name} and I am ${this.age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
