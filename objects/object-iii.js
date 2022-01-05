function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

console.log("name" in makeUser('Richard', 62))
console.log(makeUser('James', 12))

let user = makeUser('Cloe', 20)

for (key in user) {
    console.log(key + ': ' + user[key])
}