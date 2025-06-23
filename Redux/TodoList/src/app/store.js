import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../features/TodoSlice.js'

export const store=configureStore({
  reducer: rootReducer
})