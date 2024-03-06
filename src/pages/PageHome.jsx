import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { usePersonajes, usePlanetas } from "../hooks/";
import { TableRegistros } from "../components/Table/TableRegistros";
import { useNavigate } from "react-router-dom";
import { ImgGoku, ImgTierra } from '../assets/'

export const PageHome = () => {
  const navigate = useNavigate();

  const { personajes, obtnerPersonajes, columnasPersonajes } = usePersonajes();
  const { planetas, obtnerPlanetas, columnasPlanetas } = usePlanetas();

  useEffect(() => {
    obtnerPersonajes();
    obtnerPlanetas();
  }, []);

  return (
    <>
      <Stack
        justifyContent="center"
        gap={2}
        flexDirection="row"
        width={1.0}
        height={100}
        flexWrap="wrap"
      >
        <Button variant="outlined" sx={{width:200}} onClick={() => navigate("personajes")} endIcon={<img src={ImgGoku} width={50}/>}>
          Personajes
        </Button>
        <Button variant="outlined" sx={{width:200}} onClick={() => navigate("planetas")} endIcon={<img src={ImgTierra} width={50}/>}>
          Planetas
        </Button>
      </Stack>
      <Box sx={{width:"75%", m: 5,  marginLeft:"auto", marginRight:"auto"}}>
        <TableRegistros data={personajes} columnas={columnasPersonajes} pageSize={5}/>
        <Divider orientation="horizontal" flexItem />
        <TableRegistros data={planetas} columnas={columnasPlanetas} pageSize={5}/>
      </Box>
    </>
  );
};
