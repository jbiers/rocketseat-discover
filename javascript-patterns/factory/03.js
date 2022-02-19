let myFunction = function () {
    let name = 'Todd';
    console.log(name);

    printName();
}

let printName = function () {
    console.log(name);
};

myFunction();
