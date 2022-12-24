import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

//init va a darnos el estado de inicio, en este caso si existe el user
//en el localStorage lo va a retornar, en cambio si no existe
//va a retornar un objeto con el logged en false indicando que el usuario no esta logeado
const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || { logged:false }
}


export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init)
  return (
    <AuthContext.Provider value={{ user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
