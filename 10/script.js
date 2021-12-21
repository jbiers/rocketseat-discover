// a function declared as bellow, is hoisted

function sayMyName() {
    console.log("Julia");
}

// a function declared as bellow, isn't

const sayMyName = function () {
    console.log("Julia");
}

// which is equivalent to

const sayMyName = () => {
    console.log("Julia");
}

// função passada como argumento é uma callback
// pode executar o argumento passado

function sayMyName(name) {
    name();
}

sayMyName(
    () => {
        console.log('uma callback')
    }
)