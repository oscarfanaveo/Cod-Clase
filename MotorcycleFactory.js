import {
  MotorcycleType1,
  MotorcycleType2,
  MotorcycleType3,
  MotorcycleType4
} from "./Motorcycle";

class MotorcycleFactory {
  create(model) {
    switch (model) {
      case "deportiva":
        return new MotorcycleType1();
      case "motoneta":
        return new MotorcycleType2();
      case "moto":
        return new MotorcycleType3();
      case "cuatrimoto":
        return new MotorcycleType4();
      default:
        console.log("Modeloo no encencontratradoo ", model);
        break;
    }
  }
}

export default MotorcycleFactory;
