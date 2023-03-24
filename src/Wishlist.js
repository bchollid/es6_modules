export default class Wishlist {
    constructor(){
        this.cars = [];
    }
    add(car){
        this.cars.push(car)
    }
    remove(car){
        let carToRemove = this.cars.indexOf(car);
        this.cars.splice(carToRemove, 1);
    }
}