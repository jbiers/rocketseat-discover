let a = 17;

const func = x => {
    let a = x;
};

func(99);

console.log(a);

// this = current context
// scope == namespace, the space in between curly brackets

// variables defined in local scope are not available in global scope, unless exposed.
