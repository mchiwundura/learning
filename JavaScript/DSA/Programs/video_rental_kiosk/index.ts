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
	for (list.front(); list.currPos() < list.length(); list.next()) {
		const el = list.getElement();
		if (!el) continue;

		if (el instanceof Customer) {
			console.log(el.getName + ", " + el.getMovie);
		} else {
			console.log(el);
		}
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

console.log(movieList);
