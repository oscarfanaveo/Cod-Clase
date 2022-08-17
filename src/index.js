import FactoryProvider from "./FactoryProvider";

const superFactory = new FactoryProvider();

const cars = superFactory.createType("car");
const motorcycle = superFactory.createType("motorcycle");

//Cars
const superCar = cars.create("super");
console.log(superCar.description());


const combiCar = cars.create("combi");
console.log(combiCar.description());


//Motorcycle
const sportMoto = motorcycle.create("deportiva");
console.log(sportMoto.description());


const quadbike = motorcycle.create("cuatrimoto");
console.log(quadbike.description());

