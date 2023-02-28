# Prototype
Prototype es un patrón de diseño creativo que permite clonar objetos, incluso complejos, sin acoplarse a sus clases específicas.

Todas las clases prototipo deben tener una interfaz común que permita copiar objetos incluso si sus clases concretas son desconocidas.
Los objetos prototipo pueden producir copias completas, ya que los objetos de la misma clase pueden acceder a los campos privados de los demás.

En Javascript se resume

let obj={}
let newObject=Object.create(obj,{newField:{value:''}})


con clases tambien funciona con el objeto
