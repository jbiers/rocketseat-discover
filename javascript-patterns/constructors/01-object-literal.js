const ball = {
    size: 30,
    color: 'red',
    position: {
        x: 0,
        y: 15
    },

    whereAmI: function () {
        console.log(`x: ${this.position.x}   y: ${this.position.y}`);
    }
}

ball.whereAmI();