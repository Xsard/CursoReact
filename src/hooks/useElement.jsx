import React from 'react'

export const useElement = () => {

    const inputCustom = (value, onchange, style) =>{
        return(
            <input value={value} onChange={(e) => onchange(e.target.value)} style={style}/> 
        )
    }
    const buttonCustom = (style, valor, onclick) =>{
        return(
            <button onClick={() => onclick()} style={style}>{valor}</button>
        )
    }
  return {
    inputCustom,
    buttonCustom
  }
}
