const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`)
    return { printString };
}

const taco = FactoryFunction('taco');

console.log(taco)