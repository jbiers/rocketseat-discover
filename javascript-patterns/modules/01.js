let myModule = (function () {
    'use strict';

    let _privateProperty = 'Hello Private!'

    function _privateMethod() {
        console.log(_privateProperty)
    }

    return {
        publicMethod: function () {
            _privateMethod()
        }
    }
})()

myModule.publicMethod()