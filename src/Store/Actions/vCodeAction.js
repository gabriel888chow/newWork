// export const ADD_vCardQrCode = 'ADD_vCardQrCode'; 

// export const addVcardQrCode = (payload) {
//     return {
//         type: ADD_vCardQrCode,
//         payload
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const createVcardQrCode = createAction('addVcardQrCode');