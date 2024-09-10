import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      const anecdoteContent = action.payload

      return `you voted '${anecdoteContent}'`
    },

    removeNotification(state, action) {
      return ''
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer