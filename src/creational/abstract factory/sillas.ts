interface Chair {
  hasLegs: () => boolean
  sitOn: () => void
}
class VictorianChair implements Chair {
  hasLegs (): boolean { return true }
  sitOn (): void { }
}
class ModernChair implements Chair {
  hasLegs (): boolean {
    return true
  }

  sitOn (): void { }
}

interface Sofa {
  sits: number
}
class VictorianSofa implements Sofa {
  sits = 1
}
class ModernSofa implements Sofa {
  sits = 2
}

interface FurnitureFactory {
  createChair: () => Chair
  createSofa: () => Sofa
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair (): Chair {
    return new VictorianChair()
  }

  createSofa (): Sofa {
    return new VictorianSofa()
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair (): Chair {
    return new ModernChair()
  }

  createSofa (): Sofa {
    return new ModernSofa()
  }
}

function clientCode (factory: FurnitureFactory): void {
  const chair = factory.createChair()
  const sofa = factory.createSofa()

  chair.hasLegs()
  console.log(sofa.sits)
}

// Client Create Factory Victorian
clientCode(new VictorianFurnitureFactory())

// Client Create Factory Modern
clientCode(new ModernFurnitureFactory())
