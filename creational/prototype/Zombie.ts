const zombie = {
  eatBrains () {
    return 'eat'
  }
}
// @ts-expect-error
console.log(zombie.name)// undefined
// Creamos un nuevo objeto , que toma como base otro objeto (que sera el protoype del nuevo) y se le añaden nuevas propiedades. (no modifica al anterior)
const chad = Object.create(zombie, { name: { value: 'chad' } }) // TODO: MEJOR FORMA ES ESTA
console.log(chad.name)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(zombie.name) // El objeto origina no tiene la propiedad
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line no-proto
zombie.__proto__.name = 'ga' // agregaemos el campo name al origina
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(zombie.name)
// ---------------------------------------------------------
console.log('Prueba con clases -----------------------------')
class ZombieClass {
  eatBrains (): string {
    return 'eat'
  }
}
const chad0 = new ZombieClass()
const chad00 = Object.create(chad0, { name: { value: 'awa' } })
console.log(chad0.eatBrains(), chad00.name)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(new ZombieClass().name) // undefined
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
ZombieClass.prototype.name = 'chad'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(new ZombieClass().name) // chad
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
ZombieClass.prototype.name = 'aea'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(new ZombieClass().name) // aea
