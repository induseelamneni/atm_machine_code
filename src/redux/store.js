//import { configureStore } from '@reduxjs/toolkit'
import {legacy_createStore as createStore} from 'redux'
import rootReducers from "./reducer"


//  const store = configureStore({
//   reducer: {
//     product: rootReducers,
  
//   }
// }) 

const store = createStore(rootReducers)

export default store