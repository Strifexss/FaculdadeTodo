import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const HasNotificationSlice = createSlice({
    name: "HasNotification",
    initialState,
    reducers: {
        handleHasNotification: (state ) => {
            console.log(state)
            return true
        },
        handleHasNoNotification: (state) => {
            return  false
        }
    }
})

export const {handleHasNotification, handleHasNoNotification} = HasNotificationSlice.actions

export default HasNotificationSlice.reducer