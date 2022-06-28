import { useTempCelcius } from './intent';
import { model } from './model';

// view 영역
export function Celcius() {
  // model을 가져와서 초기화
  const mModel = model
  mModel.tempC = 10

  // intent 선언, page의 최상단에 선언
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