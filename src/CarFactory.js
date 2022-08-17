import { CarType1, CarType2, CarType3, CarType4 } from "./Car";

class CarFactory {
  create(model) {
    switch (model) {
      case "super":
        return new CarType1();
      case "deportivo":
        return new CarType2();
      case "combi":
        return new CarType3();
      case "clasico":
        return new CarType4();
      default:
        console.log("Modeloo no encencontratradoo ", model);
        break;
    }
  }
}

export default CarFactory;
