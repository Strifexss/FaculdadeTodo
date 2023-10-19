import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/app/features/counter/counterSlice/counterSlice'
import NotificationReducer from '@/app/features/Notifications/NotificiationSlice/NotificationSlices'
import IDReducer from '@/app/features/IDITems/IDItemsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Notification: NotificationReducer,
    ID: IDReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch