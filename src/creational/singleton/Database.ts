class Database { // Best!!!
  private static instance: Database
  private constructor () {} // Para que no se pueda instanciar
  public static getInstance (): Database {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!Database.instance) Database.instance = new Database()
    return Database.instance
  }

  query (sql: string): string {
    return ''
  } 
}
 
//const a = new Database() // rechaza => Ok
const b = Database.getInstance() // Ok
//Database.instance// Not accesible => Ok




export {}