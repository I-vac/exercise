// let title = "Titanic"
// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true
//
// console.log(movie_title, age, bool);
//
// let array: number[] = [10, 20, 30];
//
// let object: object = {title: "test"};
//
// type User = {
//     id: number,
//     first_name: string,
//     last_name: string,
//     years_old: number,
//     is_active: boolean
// }
//
// let user: User = {
//     id: 1,
//     first_name: ("Ivaylo"),
//     last_name: ("Nikolov"),
//     years_old: 21,
//     is_active: true
// }


enum CAR_TYPE {
    SEDAN = "sedan",
    COMBI = "combi",
    HATCHBACK = "hatchback"
}
enum FERRARI_COLOR {
    PINK = "pink",
    YELLOW = "yellow",
    GRAY = "gray"
}

class Car {
    private _type: CAR_TYPE;

    constructor() {
        this._type = CAR_TYPE.SEDAN;
    }


    getType(): CAR_TYPE {
        return this._type;
    }

    setType(value: CAR_TYPE) {
        this._type = value;
    }
}
//
// const car = new Car();
// car.setType(CAR_TYPE.HATCHBACK);
// console.log(car.getType());

class Ferrari extends Car {
    private color: FERRARI_COLOR;
    constructor() {
        super();
        this.color = FERRARI_COLOR.GRAY;
    }
    setColor (color: FERRARI_COLOR) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }

}

const ferrari = new Ferrari();
ferrari.setColor(FERRARI_COLOR.PINK);
console.log(ferrari.getType());
console.log(ferrari.getColor());