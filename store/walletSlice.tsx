import {createSlice} from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        balance: 10
    },
    reducers: {
        getMoney(state, action): void{
            state.balance += 1000
        },
        sendMoney(state, action): void{
            state.balance -= 1000
        },
    }
})

export const {getMoney, sendMoney} = walletSlice.actions;
export default walletSlice.reducer;