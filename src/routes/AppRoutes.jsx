import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout'
import { PageCounter, PageHome, PagePersonajes, PagePlanetas, PageTextos, PageTextosSecundarios } from '../pages'


export const AppRoutes = () => {
  return (
    <AppLayout>
        <Routes>
            <Route path='/personajes/*' element={<PagePersonajes />}/>
            <Route path='/planetas/*' element={<PagePlanetas />}/>
            <Route path='/counter/*' element={<PageCounter />}/>
            <Route path='/textosecundarios/*' element={<PageTextosSecundarios />}/>
            <Route path='/texto/*' element={<PageTextos />}/>
            <Route path='/*' element={<PageHome />}/>
        </Routes>
    </AppLayout>
  )
}
