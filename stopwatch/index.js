function Stopwatch() {
    this.duration = 0;

    let isOn = false;
    let firstTime;
    let secondTime;

    this.reset = function () {
        duration = 0;
    };

    this.start = function () {
        if (isOn) {
            throw new Error('Stopwatch has already started.');
        }

        else {
            firstTime = Date.now();
            isOn = true;
        }
    };

    this.stop = function () {
        if (!isOn) {
            throw new Error('Stopwatch is not started.');
        }

        else {
            secondTime = Date.now();
            this.duration = (secondTime - firstTime) / 1000;

            isOn = false;
        }
    };

};