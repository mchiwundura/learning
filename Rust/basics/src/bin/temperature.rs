use std::io::stdin;

// Convert temperatures between Fahrenheit and Celsius.
fn main() {
    let mut temperature = String::new();
    let mut unit = String::new();
    println!("What is the temperature");
    stdin().read_line(&mut temperature).expect("No temparature given");
    println!("What unit is it");
    stdin().read_line(&mut unit).expect("No unit provided");

    let temperature: f64 = temperature.trim().parse().expect("Invalid temperature");
    let unit = unit.trim().to_lowercase();

    if unit == "d" {
    println!("The Temparature is {} F" ,temperature * 1.8 + 32.0);
    } 
    else {
    println!("The Temparature is {} C" ,(temperature - 32.0) / 1.8 );
    }
}
