function Product(name, price) {
    this.name = name;
    this.price = price;
    console.log(this);
}

function Food(name, price) {
    console.log(this);
    Product.call(this, name, price);
    this.category = 'food';
    console.log(this);
}

console.log(new Food('cheese', 5).name);