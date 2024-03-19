import React, { useMemo, useState } from 'react'
import { request } from '../backend/RequestBackend'
import { useDispatch, useSelector } from 'react-redux'
import { setlistaPlanetas } from '../store/planetas/planetasSlice'

export const usePlanetas = () => {
    
    const [planetas, setplanetas] = useState([]);
    const { listaPlanetas } = useSelector((state) => state.planetas);
    const dispatch = useDispatch();
    const columnasPlanetas =  useMemo(
        () => [
          {
            accessorKey: 'name', //access nested data with dot notation
            header: 'Nombre',
            size: 50,
          },
          {
            accessorKey: 'description',
            header: 'Descipción',
            size: 1000,
          },
          {
            accessorKey: 'image',
            header: 'Imagen',
            size: 10,
            Cell: ({ cell }) => <img src={cell.getValue()} width="60" height="60" />
          },
        ],
        [],
      );

    const planetasDbz = useMemo(()=>{
        return planetas
    }, [planetas])

    const obtnerPlanetas = async()=>{
        console.log("Se ejecutó obtnerPlanetas")

        const response = await request("GET", import.meta.env.VITE_APP_URL_PLANETAS);
         
        dispatch(setlistaPlanetas({listaPlanetas: response.items, message: "OK"}));
    }

    return {
        obtnerPlanetas,
        planetas: listaPlanetas,
        columnasPlanetas
    }
}