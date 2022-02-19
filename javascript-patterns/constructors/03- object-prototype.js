let animal = {
    eats: true,
    walk() {
        console.log('test')
    }
}

let rabbit = {
    __proto__: animal
}

rabbit.walk = function () {
    console.log('bounce')
}

rabbit.walk()