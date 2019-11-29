export default function log(logText) {
    return function (target, name, descriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function () {
            console.log(`log: ${logText}`);
            return oldValue.apply(this, arguments);
        };
        return descriptor;
    };
}
