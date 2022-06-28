export interface IModel {
  tempF: number
  tempC: number
}

export const model: IModel = {
  tempF: 0,
  tempC: 0,
}

export class Model {
  private tempC: number;
  private tempF: number
  constructor() {
    this.tempC = 0
    this.tempF = 0
  }

  public setTempC(temp: number) {
    this.tempC = temp
  }

  public setTempF(temp: number) {
    this.tempF = temp
  }

  public setModel(model: IModel) {
    this.tempC = model.tempC
    this.tempF = model.tempF
  }

  public getTempF(): number {
    return this.tempF
  }

  public getTempC(): number {
    return this.tempC
  }

  public getModel(): IModel {
    return {
      tempF: this.tempF,
      tempC: this.tempC
    }
  }
}