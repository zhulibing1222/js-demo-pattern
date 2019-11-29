class SingleObject {
    constructor () {}
}

SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (instance) {
            return instance;
        } else {
            return  new SingleObject();
        }
    }
})();
