# Prototype
Prototype es un patrón de diseño creativo que permite clonar objetos, incluso complejos, sin acoplarse a sus clases específicas.

Todas las clases prototipo deben tener una interfaz común que permita copiar objetos incluso si sus clases concretas son desconocidas.
Los objetos prototipo pueden producir copias completas, ya que los objetos de la misma clase pueden acceder a los campos privados de los demás.

En Javascript se resume

let obj={}
let newObject=Object.create(obj,{newField:{value:''}})


con clases tambien funciona con el objeto pero se debe implenetar una interfaz IProtoype que tiene el metodo clone().
Puede ser una clonacion superficial(1 nivel) o profunda (Todos los niveles)


ejemplo class
MyClass implements IProtoType {
            // A Concrete Class
            field: number[]

            constructor(field: number[]) {
                this.field = field // any value of any type
            }

            clone() {
                return Object.assign({}, this) // shallow copy
                // return JSON.parse(JSON.stringify(this)); //deep copy
            }
        }
