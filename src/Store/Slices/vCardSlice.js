import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vCardQrcodes: [],
};

const vCardSlice = createSlice({
    name: "vCardQrcodes",
    initialState,
    reducers: {
        createVcardQrCode(state, action) {
            state.vCardQrcodes.push(action.payload);
        }
    }
})

console.log(vCardSlice);

export const { createVcardQrCode } = vCardSlice.actions;

export default vCardSlice.reducer;