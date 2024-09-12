import {createContext, useContext, useReducer} from 'react'

const notificationReducer = (state, action) => {
  switch(action.type) {
    case 'created':
      return `anecdote "${action.payload.content}" created`
    case 'voted':
      return `anecdote "${action.payload.content}" voted`
    case 'reset':
      return ''
    case 'invalid input':
      return action.payload
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, '')

  return (
      <NotificationContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </NotificationContext.Provider>
  )
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

export default NotificationContext