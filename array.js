var cars = [];
var car01 = {
    name: "sonata",
    ph: "500ph",
    start: function(){
        console.log("engine is stating");
    },
    stop: function(){
        console.log("engine is stoped");
    }
}
var car02 = {
    name: "BMW",
    ph: "600ph",
    start: function(){
        console.log("engine is starting");
    },
    stop: function(){
        console.log("engine is stoped");
    }
}
cars[0] = car01;
cars[1] = car02;

console.log(cars[1].start())
console.log(cars[0].name)