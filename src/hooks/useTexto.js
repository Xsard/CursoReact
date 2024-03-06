import React, { useMemo, useState } from 'react'

export const useTexto = (initialState = null) => {
    
    const [texto, setTexto] = useState((initialState === null) ? "vacio" : initialState.texto)

    const cambioTexto = (value) =>{
        setTexto(value)
    }
  
    const memoTexto = useMemo(()=>{
        return `Largo del texto ${texto.length}`
    },[texto])

    return {
        texto,
        cambioTexto,
        memoTexto
  }
}
