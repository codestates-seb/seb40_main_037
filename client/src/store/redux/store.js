import { configureStore } from '@reduxjs/toolkit'
import uploadReducer from './upload'

export const store = configureStore({
  reducer: {
    upload: uploadReducer
  }
})