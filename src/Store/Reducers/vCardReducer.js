import { createReducer } from '@reduxjs/toolkit';
import { createVcardQrCode } from "../Actions/vCodeAction";

const initialState = {
    vCardQrcodes: [],
}

const vCardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createVcardQrCode, (state, action) => {
            state.vCardQrcodes.push(action.payload);
        });
    // .addCase(deleteRecord, (state, action) => {
    //     state.vCardQrcodes = state.vCardQrcodes.filter(())
    // })
});

export default vCardReducer;
