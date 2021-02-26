let num: number = 5
let nameUs: string = 'Shamil'
let isPresent: boolean = true

class Car {
    // fields
    model: String
    doors: Number
    isElectric: Boolean

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model
        this.doors = doors
        this.isElectric = isElectric
    }

    displayMake (): void {
        console.log(`This car is ${this.model}`)
    }

}

const Prius = new Car('Prius', 3, true)

Prius.displayMake()

/**
 const CarStandard = {
    model: 'Prius',
    make: 'Toyota',
    display() => { console.log('Hi') }
}
 */

interface ICar {
    model: String,
    make: String,
    display(): void
}

const CarFromInterface: ICar = {
    model: 'Prius',
    make: 'Toyota',
    display() {
        console.log('Hi')
    }
}

CarFromInterface.display()