import React, { useMemo, useState } from 'react'
import { request } from '../backend/RequestBackend'

export const usePersonajes = () => {
    
    const [personajes, setPersonajes] = useState([])
    
    const columnasPersonajes =  useMemo(
        () => [
          {
            accessorKey: 'name', //access nested data with dot notation
            header: 'Nombre',
            size: 150,
          },
          {
            accessorKey: 'gender',
            header: 'Tipo',
            size: 150,
          },
          {
            accessorKey: 'ki', //normal accessorKey
            header: 'Ki',
            size: 200,
          },
          {
            accessorKey: 'maxKi',
            header: 'Ki máximo',
            size: 150,
          },
          {
            accessorKey: 'affiliation',
            header: 'Afiliación',
            size: 150,
          },
        ],
        [],
      );

    const personajesDbz = useMemo(()=>{
        return personajes
    }, [personajes])

    const obtnerPersonajes = async()=>{
        const response = await request("GET", import.meta.env.VITE_APP_URL_PERSONAJES);
        console.log(response)
        setPersonajes(response.items)
    }

    return {
        obtnerPersonajes,
        personajes: personajesDbz,
        columnasPersonajes
    }
}
