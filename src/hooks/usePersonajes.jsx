import React, { useMemo, useState } from 'react'
import { request } from '../backend/RequestBackend'
import { useDispatch, useSelector } from 'react-redux';
import { setlistaPersonajes } from '../store/personajes/personajesSlice';

export const usePersonajes = () => {

  const [personajes, setPersonajes] = useState([])
  const { listaPersonajes } = useSelector((state) => state.personajes);
  const { listaPlanetas } = useSelector((state) => state.planetas);
  const dispatch = useDispatch();
  const columnasPersonajes = useMemo(
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
      {
        accessorKey: 'race',
        header: 'Raza',
        size: 150,
      },
      {
        accessorKey: 'planet.name',
        header: 'Planeta',
        size: 150
      },
      {
        accessorKey: 'planet.image',
        header: 'Foto del planeta',
        size: 150,
        align:' center',
        Cell: ({ cell }) => <img src={cell.getValue()} width="60" height="60" />
      },
    ],
    [],
  );

    /*const personajesDbz =*/ useMemo(() => {
    return personajes
  }, [personajes])

  const obtnerPersonajes = async () => {
    console.log("Se ejecutó obtnerPersonajes")
    const response = await request("GET", import.meta.env.VITE_APP_URL_PERSONAJES);
    console.log(listaPlanetas)
    response.items.forEach(e => {
      switch (e.race) {
        case "Saiyan":
        case "Android":
        case "Human":
          e["planet"] = listaPlanetas.find(x => x.name === 'Tierra')
          break;
        case "Frieza Race":
          e["planet"] = listaPlanetas.find(x => x.name === 'Freezer No. 79')
          break;
        case "Namekian":
          e["planet"] = listaPlanetas.find(x => x.name === 'Namek')
          break;
        default:
          break;
      }
    });
    //setPersonajes(response.items)
    dispatch(setlistaPersonajes({ listaPersonajes: response.items, message: "OK" }));
  }

  return {
    obtnerPersonajes,
    personajes: listaPersonajes,
    columnasPersonajes
  }
}
