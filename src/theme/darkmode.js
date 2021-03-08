import { MuiThemeProvider, useMediaQuery } from "@material-ui/core"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { switchTheme } from "../slices/themeSlice"
import { breakpoints } from "./breakpoints"

const DarkMode = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const dispatch = useDispatch()
  useEffect(() => {
    if (prefersDarkMode) {
      dispatch(switchTheme(prefersDarkMode))
    }
  },[])

  return <MuiThemeProvider theme={breakpoints}>{props.children}</MuiThemeProvider>
}
export default DarkMode
