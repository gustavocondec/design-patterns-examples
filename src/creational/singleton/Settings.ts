class Settings1 {
  static instance :  Settings1
  private constructor () {}
  static getInstance (): Settings1 {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!Settings1.instance) Settings1.instance = new Settings1()
    return Settings1.instance
  }
}
//const a = new Settings1() // no se puede
const b = Settings1.getInstance()
Settings1.instance = 'hola' // Mal
// --------------------------------------------------------
class Settings4 { // Bien !!
  private static instance: Settings4
  private constructor () {} // bloquear constructor para no poder llamarlo
  static getInstance (): Settings4 {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!Settings4.instance) Settings4.instance = new Settings4()
    return Settings4.instance
  }
}
//const d = new Settings4() // No funcionara
const d4 = Settings4.getInstance() // Ok
//Settings4.instance = 'hola' // Ok, no se puede modificar desde fuera
// --------------------------------------------------------
class Settings2 {// bien
  static  instance: Settings2
  constructor () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!Settings2.instance) Settings2.instance = new Settings2()
    return Settings2.instance
  }

  getHello (): string {
    return 'Hello'
  }
}
const c = new Settings2()
//Settings2.instance = 'hola' // Prohibido => Ok!

// --------------------------------------------------------
class Settings3 {// bien
  private static instance: Settings3 | null
  constructor () {
    if (Settings3.instance == null) Settings3.instance = new Settings3()
    return Settings3.instance
  }

  getInstance () {
    return Settings3.instance
  }
}
const de = new Settings2()
//Settings3.instance = 'hola' // Prohibido => Ok!




export {}