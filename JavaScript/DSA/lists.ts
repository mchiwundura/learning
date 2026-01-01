import List from "./ADTs/list.ts";

// 1. Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

let orderedList = new List<string>();
orderedList.append("James");
orderedList.append("Iniesta");

function addLargerElement<T>(listItem: T) {
  for (let i = 0; i < orderedList.length(); i++) {
    if (orderedList.getElement() < listItem) {
      orderedList.append(listItem);
      break;
    }
    orderedList.next();
  }
}

// 2. Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.

function addSmallerElement<T>(listItem: T) {
  for (let i = 0; i < orderedList.length(); i++) {
    if (orderedList.getElement() > listItem) {
      orderedList.append(listItem);
      break;
    }
    orderedList.next();
  }
}

addLargerElement("Charles");
addLargerElement("Kylian");
addLargerElement("Randall");
addLargerElement("Lesnar");
addSmallerElement("Zidanne");
addSmallerElement("bonucci");
addSmallerElement("chiellini");
addSmallerElement("Bazagli");

orderedList.front();
console.log(orderedList.toString());

// Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

class Person {
  constructor(
    private name: string,
    private gender: "Male" | "Female",
  ) {}

  toString(): string {
    return `${this.name} (${this.gender})`;
  }

  getName(): string {
    return this.name;
  }

  getGender(): "Male" | "Female" {
    return this.gender;
  }
}

let personList = new List<Person>();
personList.append(new Person("Eren Yeager", "Male"));
personList.append(new Person("Mikasa Ackerman", "Female"));
personList.append(new Person("Armin Arlert", "Male"));
personList.append(new Person("Levi Ackerman", "Male"));
personList.append(new Person("Erwin Smith", "Male"));
personList.append(new Person("Jean Kirstein", "Male"));
personList.append(new Person("Sasha Blouse", "Female"));
personList.append(new Person("Connie Springer", "Male"));
personList.append(new Person("Historia Reiss", "Female"));
personList.append(new Person("Annie Leonhart", "Female"));

function displayOfGender(gender: "Male" | "Female") {
  personList.front();
  let personsOfSameGender: string[] = [];
  for (let i = 0; i < personList.length(); i++) {
    if (personList.getElement().getGender() == gender) {
      personsOfSameGender.push(personList.getElement().getName());
    }
    personList.next();
  }
  return personsOfSameGender;
}

console.log(displayOfGender("Female"));
