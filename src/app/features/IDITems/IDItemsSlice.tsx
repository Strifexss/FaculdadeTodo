import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const IdSlice = createSlice({
    name: "Id",
    initialState,
    reducers: {
        IDIncrement: (state) => {
            return state + 1;
        }
    }
});

export const { IDIncrement } = IdSlice.actions;

export default IdSlice.reducer;