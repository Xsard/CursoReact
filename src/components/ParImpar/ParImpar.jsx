import { useEffect, useState } from 'react'

const ParImpar = ({number}) => {
  
    const[esPar, setEsPar] = useState("")

    useEffect(() =>{
        if(number%2==0){
            setEsPar("Par")
        }
        else{
            setEsPar("Impar")
    
      }
    
    },[number])
  return (
    <div>{esPar}</div>
  )
}

export default ParImpar