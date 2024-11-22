function Account(login, email) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo();

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo();


class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mangoUser = new User('Mango', 2, 20);
mangoUser.getInfo();

const polyUser = new User('Poly', 3, 17);
polyUser.getInfo();


class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(currentItem => currentItem !== item);
    }
}

const storage = new Storage(['Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор']);
console.table(storage.getItems());
storage.addItem('Дроїд');
console.table(storage.items);
storage.removeItem('Пролонгер');
console.table(storage.items);


class StringBuilder {
    constructor(value) {
        this.value = value;
    }

    append(str) {
        this.value += str;
    }

    prepend(str) {
        this.value = str + this.value;
    }

    pad(str) {
        this.value = str + this.value + str;
    }
}

const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value);
builder.prepend('^');
console.log(builder.value);
builder.pad('=');
console.log(builder.value);


class Car {
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }

    constructor(maxSpeed, price) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.price = price;
        this.isOn = false;
        this.distance = 0;
    }

    get price() {
        return this.priceValue;
    }

    set price(value) {
        this.priceValue = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        this.speed = Math.min(this.speed + value, this.maxSpeed);
    }

    decelerate(value) {
        this.speed = Math.max(this.speed - value, 0);
    }

    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
        }
    }
}

const mustang = new Car(200, 2000);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
