import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listaPlanetas: null,
    message: null
}

const planetasSlice = createSlice ({
    name: 'planetas',
    initialState,
    reducers:{
        setlistaPlanetas: (state, {payload}) => {
            state.listaPlanetas = payload?.listaPlanetas
            state.message = payload?.message
        },
        setMessageError: (state, {payload}) => {
            state.message = payload?.error
        }
    }
})

export const {setlistaPlanetas, setMessageError} = planetasSlice.actions;

export default planetasSlice.reducer