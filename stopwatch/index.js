function Stopwatch() {
    let duration = 0;
    let running = false;
    let firstTime;
    let secondTime;

    this.reset = function () {
        duration = 0;
    };

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }

        else {
            this.reset();

            firstTime = Date.now();
            running = true;
        }
    };

    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch is not started.');
        }

        else {
            secondTime = Date.now();
            duration = (secondTime - firstTime) / 1000;

            running = false;
        }
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    })
};