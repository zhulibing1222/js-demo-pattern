class People {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    say(msg) { alert(msg); }
}

export default function (name, age) {
    return new People(name, age);
}
