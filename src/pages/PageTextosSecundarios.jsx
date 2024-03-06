import React from 'react'
import { useTexto } from '../hooks'

export const PageTextosSecundarios = () => {

    const { texto,memoTexto, cambioTexto } = useTexto({texto:"Secundario"});
  return (
    <>
      <input onChange={(e) => cambioTexto(e.target.value)} value={texto}></input>
      <h3>{texto}</h3>
      <h4>{memoTexto}</h4>
    </>
  )
}
