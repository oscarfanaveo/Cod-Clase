import CarFactory from "./CarFactory";
import MotorcycleFactory from "./MotorcycleFactory";

class FactoryProvider {
  createType(type) {
    if (type === "car") {
      return new CarFactory();
    } else if (type === "motorcycle") {
      return new MotorcycleFactory();
    } else {
      console.log("Error type");
    }
  }
}

export default FactoryProvider;
