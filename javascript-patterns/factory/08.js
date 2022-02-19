const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return { sayName }
}

const Nerd = (name) => {
    const { sayName } = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')

    return { sayName, doSomethingNerdy }
}

const jeff = Nerd('jeff')

jeff.sayName()
jeff.doSomethingNerdy()