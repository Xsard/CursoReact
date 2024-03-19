import { configureStore } from '@reduxjs/toolkit'
import planetasSlice from './planetas/planetasSlice'
import personajesSlice from './personajes/personajesSlice'

export const store = configureStore({
    reducer:{
        planetas: planetasSlice,
        personajes: personajesSlice
    }
}) 