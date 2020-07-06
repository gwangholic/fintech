var cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
var text = "";

for (let i = 0; i < cars.length; i++) {
    text += cars[i];
}

console.log(text);

cars.map((car) => {
    console.log(car);
})