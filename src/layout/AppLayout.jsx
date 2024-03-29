import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ImgDragonBall } from "../assets";
import { usePersonajes, usePlanetas } from "../hooks";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";


export const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const { planetas, obtnerPlanetas } = usePlanetas();
  const { personajes, obtnerPersonajes } = usePersonajes();

  useEffect(() => {
    const fetchData = async()=>{
      if(planetas === null) await obtnerPlanetas();
    }
    fetchData();

  },);
  useEffect(() => {
    const fetchData = async()=>{
      if(personajes === null && planetas != null) await obtnerPersonajes();
    }
    fetchData();
  }, [planetas])
  
  
  return (
    <>
      {(planetas === null || personajes === null) ? (<LoadingScreen/>) : (
      <>
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => navigate("home")} aria-label="logo">
              <img src={ImgDragonBall} width={50} />
              Api
            </IconButton>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={() => navigate("personajes")}>
                Personajes
              </Button>
              <Button color="inherit" onClick={() => navigate("planetas")}>
                Planetas
              </Button>
              <Button color="inherit" onClick={() => navigate("counter")}>
                Counter
              </Button>
              <Button color="inherit" onClick={() => navigate("textosecundarios")}>
                Textos secundarios
              </Button>
              <Button color="inherit" onClick={() => navigate("texto")}>
                Textos
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "1%" }}>{children}</div>
      </>)

      }

    </>
  );
};
