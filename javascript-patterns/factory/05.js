const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`- - - -${capitalizeString(string)}- - - -`);

    return { printString };
};

const taco = FactoryFunction('taco');
console.log(taco)

taco.printString();

/**
 * FUNCTIONS RETAIN THEIR SCOPE!!!
 * The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope. In this case, printString has access to everything inside of FactoryFunction, even if it gets called outside of that function.
 */