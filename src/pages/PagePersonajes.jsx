import React, { useEffect } from 'react'
import { usePersonajes } from '../hooks'
import { TableRegistros } from '../components/Table/TableRegistros';
import { Box } from '@mui/material';

export const PagePersonajes = () => {

    const { personajes, obtnerPersonajes, columnasPersonajes } = usePersonajes();

    useEffect(() => {
      const fetchData = async()=>{
        if(personajes === null) await obtnerPersonajes();
      }
      fetchData();
  
    }, []);
  
    return (
    <>
      <Box sx={{width:"75%", m: 5,  marginLeft:"auto", marginRight:"auto"}}>
        <TableRegistros data={personajes} columnas={columnasPersonajes} pageSize={10} />
      </Box>
    </>
  )
}
