var car = {
    name: "sonata",
    ph: "500ph",
    start: function(){
        console.log("engine is starting");
    },
    end: function(){
        console.log("engine is stoped");
    }
}

console.log(car.name)
console.log(car.end())