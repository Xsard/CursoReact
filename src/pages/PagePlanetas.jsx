import React, { useEffect } from "react";
import { TableRegistros } from "../components/Table/TableRegistros";
import { usePlanetas } from "../hooks";
import { Box } from "@mui/material";

export const PagePlanetas = () => {
  const { planetas, obtnerPlanetas, columnasPlanetas } = usePlanetas();

  useEffect(() => {
    const fetchData = async()=>{
      if(planetas === null) await obtnerPlanetas();
    }
    fetchData();

  }, []);

  return (
    <>
      {
        (planetas === null) ? (<h2>Loading...</h2>) :
          (
            <Box sx={{ width: "75%", m: 5, marginLeft: "auto", marginRight: "auto" }}>
            <TableRegistros data={planetas} columnas={columnasPlanetas} pageSize={10}/>
            </Box>
          )
      }

    </>
  );
};
