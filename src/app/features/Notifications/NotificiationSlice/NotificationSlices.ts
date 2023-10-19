import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

export interface INotification {
    Mensagem: string
    hora: number,
}

const initialState: INotification[] = [] 

export const NotificationSlice = createSlice({
    name: "Notification",
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<INotification>) => {
            
            state.push(action.payload)
        }
    }
})

export const {addNotification} = NotificationSlice.actions

export default NotificationSlice.reducer