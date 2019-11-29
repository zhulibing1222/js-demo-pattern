// example 1
const Foo = {
    foo() { alert('foo') }
};

function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list);
    }
}

@mixins(Foo)
class MyClass2 {}

// 装饰器的模拟
function mixins2(target, ...list) {
    return function (target) {}
}

mixins2(MyClass2, Foo)();

// example 2
function readonly() {
    return function (target, name, descriptor) {
        descriptor.writable = false;
        // descriptor像是一个副本，而不是引用
        return descriptor;
    }
}

class MyClass3 {
    @readonly()
    order = 3;
}

// example 3
function log() {
    return function (target, name, descriptor) {
        const oldValue = descriptor.value;

        descriptor.value = function () {
            console.log(`call ${name} with ${arguments}`);
            // 注意这里的this传过去
            return oldValue.apply(this, arguments);
        };

        return  descriptor;
    }
}

class MyClass4 {
    @log()
    add(a, b) { return a + b; }
}
