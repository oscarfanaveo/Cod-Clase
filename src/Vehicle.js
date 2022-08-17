class Vehicle {
  constructor(type, model) {
    this._model = model;
    this._type = type;
  }
  get model() {
    return this._model;
  }
  get type() {
    return this._type;
  }
  description() {
    return `SoySoy deldel type "${this.type}" yy mii modeloo ees "${this.model}!"`;
  }
}

export default Vehicle;
