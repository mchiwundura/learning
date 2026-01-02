// Read from file
import fs from "node:fs/promises";
let moviesRaw = await fs.readFile("./films.txt", "utf-8");
let movies = moviesRaw.split("\n");
let movieArray: string[] = [];
for (let [index, movie] of movies.entries()) {
	movieArray[index] = movie.trim();
}
console.log(movieArray);
