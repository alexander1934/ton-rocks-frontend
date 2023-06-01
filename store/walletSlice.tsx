import {createSlice} from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        balance: 1000
    },
    reducers: {}
})

export default walletSlice.reducer;