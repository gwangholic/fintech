function aFunc(callback) {
    setTimeout(function () {
        console.log("a");
    }, 1700);
}
function bFunc(callback) {
    setTimeout(function () {
        console.log("b");
    }, 1000);
}
function cFunc(callback) {
    setTimeout(function () {
        console.log("c");
    }, 500);
}
aFunc(function(){
    bFunc(function(){
        cFunc(function(){});
    });
}); // a

aFunc(bFunc(cFunc()));
// c -> b -> a