import { useTempCelcius } from './intent';
import { model } from './model';

export function Celcius() {
  const mModel = model
  mModel.tempC = 10
  const {data, setTempC, setTempF, setReset} = useTempCelcius(mModel)

  return (
    <div>
      Temp (Celcius): {data.tempC}
      <br />
      Temp (Fahrenheit): {data.tempF}
      <br />
      <button onClick={() => setTempC(10)}>Add 10 Celcius</button>
      <br />
      <button onClick={() => {setTempF(10)}}>Add 10 Fahrenheit</button>
      <br />
      <button onClick={() => setReset()}>Reset</button>
    </div>
  )
}