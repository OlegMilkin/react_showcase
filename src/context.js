import { createContext, useReducer } from "react";
import {reducer} from './reducer'

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
}

export const ContextProvider = ({children}) => {

  const [value, dispatch] = useReducer(reducer, initialState)

  value.disableLoading = () => {
    dispatch({type: 'DISABLE_LOADING'})
  }

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}