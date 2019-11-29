class People {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    say(msg) { alert(msg); }
}

class Creator {
    create(name, age) {
        return new People(name, age);
    }
}

let creator = new Creator();
const people = creator.create('xiao zhang', 23);

