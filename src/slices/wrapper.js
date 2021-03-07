import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { rootReducer } from "./rootReducer"
import React from "react"
import DarkMode from "../theme/darkmode"

const store = configureStore({ reducer: rootReducer })

export default ({ element }) => (
  <Provider store={store}>
    <DarkMode>{element}</DarkMode>
  </Provider>
)
