use std::{collections::HashMap, io::stdin};

fn main() {
 let mut number = String::new();
 println!("What number are we fibonucci");
 stdin().read_line(&mut number).expect("Could not read");
 let number: i32 = number.trim().parse().expect("Not a number");
 let result = fibonucci(number);
 println!("Fibonacci({}) = {}", number, result);
}

fn fibonucci(number: i32) -> i32 {
    let mut storage = HashMap::new();

match number {
    0 => 0,
    1 => 1,
    _ => {
    *storage.entry(number).or_insert(fibonucci(number - 1) + fibonucci(number - 2))
    }
}
}
