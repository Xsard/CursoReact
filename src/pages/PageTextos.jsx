import React from 'react'
import { useElement, useTexto } from '../hooks'

export const PageTextos = () => {
  
  const { texto, cambioTexto, memoTexto } = useTexto({texto: "Primero"});
  const {inputCustom} = useElement()

  return (
    <>
      {inputCustom(texto, cambioTexto, {width: '10%'})}
      <h3>{texto}</h3>
      <h4>{memoTexto}</h4>
    </>
  )
}
