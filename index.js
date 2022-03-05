//const { stringMatching } = require("expect");

// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

//const result = drivers.filter(element => element === string)

function findMatching(drivers, string) {
  let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
  return result;  
    
}

function fuzzyMatch (drivers, string) {
    let result = drivers.filter(element => element.startsWith(string))
    return result;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, string) {
    const result = drivers.filter(element => element.name === string)
    return result;
}