use std::io::stdin;

const NUMBER_WORDS: [&str; 12] = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
];

const GIFTS: [&str; 12] = [
"Twelve drummers drumming",
"Eleven pipers piping",
"Ten lords a-leaping",
"Nine ladies dancing",
"Eight maids a-milking",
"Seven swans a-swimming",
"Six geese a-laying",
"Five gold rings",
"Four calling birds",
"Three French hens",
"Two turtle doves",
"And a partridge in a pear tree"
];

fn main() {
let mut day = String::new();
println!("What day of christmas is it");
stdin().read_line(&mut day).expect("You did not mention the day");

let day: usize = day.trim().parse().expect("not a number"); 

println!("For the {} day of Christmas my true love sent to me", NUMBER_WORDS[day - 1]);
if day == 1 {
    println!("A patridge in a pear tree");
}
else {
for i in (0..day).rev() {
    println!("{}", GIFTS[11 - i]);
}
}
}
