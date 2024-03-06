import React, { useMemo, useState } from 'react'

export const useCounter = (initialState) => {

    const [number, setNumber] = useState((initialState === null) ? 0 : initialState.value)

    const sum = () =>{
      console.log(number, initialState.numSum)
        const finalValue = number + ((initialState.numSum === null) ? 0 : initialState.numSum)
        setNumber(finalValue)
    }
    const subtraction = () =>{
      console.log(number, initialState.numSum)
        const finalValue = number - ((initialState.numSum === null) ? 0 : initialState.numSub)
        setNumber(finalValue)
    }
    const memoNumber = useMemo(()=>{
        if(number%2==0){
            return("Par")
        }
        else{
            return("Impar")
          }
    },[number])

  return {
    number,
    sum,
    subtraction,
    memoNumber
  }
}
