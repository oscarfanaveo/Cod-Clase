import Vehicle from "./Vehicle";

class MotorcycleType1 extends Vehicle {
  constructor() {
    super("motorcycle", "deportiva");
  }
}

class MotorcycleType2 extends Vehicle {
  constructor() {
    super("motorcycle", "motoneta");
  }
}

class MotorcycleType3 extends Vehicle {
  constructor() {
    super("motorcycle", "moto");
  }
}

class MotorcycleType4 extends Vehicle {
  constructor() {
    super("motorcycle", "cuatrimoto");
  }
}

export { MotorcycleType1, MotorcycleType2, MotorcycleType3, MotorcycleType4 };
