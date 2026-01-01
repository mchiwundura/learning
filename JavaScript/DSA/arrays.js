// Question 1 Creating a grades object that stores a set of student grades in an object with functions to add a grade and displaying a grade average

export function Grades() {
  this.studentGrades = [];
  this.add = add;
  this.average = average;
}

function add(grade) {
  this.studentGrades.push(grade);
}

function average() {
  let total = 0;
  total = this.studentGrades.reduce((total, next) => total + next);
  return total / this.studentGrades.length;
}

// Question 2 Store a set of words in an array and display the contents both forward and backward

const words = "The Quick Brown Fox Jumped Over The Lazy Dogs";
export const wordsArrayForward = words.split(" ");
export const wordsArrayBackward = [...wordsArrayForward].reverse();
