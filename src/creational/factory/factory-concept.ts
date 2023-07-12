// The Factory Concept

interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

// Tambien es posible(¿mejor?) que los product concrete implementes directamente de IProduct
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

class MyCreator {
    static createObject(someProperty: string): IProduct {
        if (someProperty === 'a') {
            return new ConcreteProductA()
        } else if (someProperty === 'b') {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}

// The Client
const PRODUCT = MyCreator.createObject('b')
console.log(PRODUCT.name)




export {}