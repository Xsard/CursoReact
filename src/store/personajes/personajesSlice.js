import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listaPersonajes: null,
    message: null
}

const personajesSlice = createSlice ({
    name: 'personajes',
    initialState,
    reducers:{
        setlistaPersonajes: (state, {payload}) => {
            state.listaPersonajes = payload?.listaPersonajes
            state.message = payload?.message
        },
        setMessageError: (state, {payload}) => {
            state.message = payload?.error
        }
    }
})

export const {setlistaPersonajes, setMessageError} = personajesSlice.actions;

export default personajesSlice.reducer