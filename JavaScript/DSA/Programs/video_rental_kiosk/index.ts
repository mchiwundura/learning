import List from "../../ADTs/list.ts";

class Customer {
  private name: string;
  private movie: string;

  constructor(name: string, movie: string) {
    this.name = name;
    this.movie = movie;
  }

  get getName(): string {
    return this.name;
  }

  get getMovie(): string {
    return this.movie;
  }
}

class Movie {
  private title: string;
  constructor(title: string) {
    this.title = title;
  }
  get getName(): string {
    return this.title;
  }
}

function displayList(list: List<Customer | Movie>): void {
  for (let i = 0; i < list.length(); i++) {
    const el = list.getElement();
    if (!el) continue;

    if (el instanceof Customer) {
      console.log(el.getName + ", " + el.getMovie);
    } else {
      console.log(el);
    }
    list.next();
  }
}

// Read from file
import fs from "node:fs/promises";
let moviesRaw = await fs.readFile("./films.txt", "utf-8");

let movies: string[] = [];
for (let [index, movie] of moviesRaw.split("\n").entries()) {
  movies[index] = movie.trim();
}

let movieList = new List();
for (let i = 0; i < movies.length; ++i) {
  movieList.append(movies[i]);
}

var customers = new List<Customer>();

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customers.append(c);
    filmList.remove(movie);
  } else {
    console.log(movie + " is not available.");
  }
  movieList.front();
  customers.front();
}

console.log("Available movies:");
displayList(movieList);
console.log("\nEnter your name: ");
var name = prompt();
console.log("What movie would you like? ");
var movie = prompt();
checkOut(name, movie, movieList, customers);
console.log("\nCustomer Rentals: \n");
displayList(customers);
console.log("\nMovies Now Available\n");
displayList(movieList);
