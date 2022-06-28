import { useCallback, useState } from "react"
import { IModel } from "./model"

export const useTempCelcius = (model: IModel) => {
  const [tempC , setTempCState] = useState(model.tempC)
  const [tempF, setTempFState] = useState(model.tempF)

  const data: IModel = {
    tempC,
    tempF
  }

  const setTempF = useCallback((temp: number) => {
    setTempFState(tempF+temp)
  },[tempF])

  const setTempC = useCallback((temp: number) => {
    setTempCState(tempC+temp)
  }, [tempC])

  const setReset = useCallback(() => {
    setTempCState(model.tempC)
    setTempFState(model.tempF)
  }, [])

  return {data, setTempF, setTempC, setReset}
}