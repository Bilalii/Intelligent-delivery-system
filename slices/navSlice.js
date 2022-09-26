import { createSlice } from "@reduxjs/toolkit";

const initialState ={
      origin: null,
      destination: null,
      TraveTimeInformation: null,

}

export const navSlice = createSlice ({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestiantion: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.TraveTimeInformation = action.payload
        },
    },

});

export const { setOrigin, setDestiantion, 
setTravelTimeInformation}=
 navSlice.actions;

 // Selectors

 export const selectOrigin = (state) => state.nav.origin;
 export const selectDestination = (state) => state.nav.destination;
 export const selectTravelTimeInformation = (state) => 
 state.nav.TraveTimeInformation;

export default navSlice.reducer;

