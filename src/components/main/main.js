import { Backdrop, Divider, makeStyles, Paper, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDrawer } from "../../slices/menu"
import { THEME } from "../../theme/theme"
import Bottom from "../layout/bottom"
import SecondaryBottom from "../layout/secondaryBottom"

import Header from "./header"
import RightSide from "./rightSide"

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: "2001",
    width: "100%",
    height: "115vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#ECECEE",
  },
  dark: {
    background: THEME.paper,
  },
  light: {
    background: THEME.light,
  },

  bottom: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "2001",
  },
  header: {
    background: THEME.primary,
    height: "100px",
    zIndex: "2001",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
    fontWeight: "600",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    zIndex: "2000",
    width: "70%",
    height: "125vh",
    left: "50%",
    top: "50%",
    marginTop: "40px",
    transform: "translate(-50%,-50%)",

   
  
    [theme.breakpoints.down(1280)]: {
      width: "100%",
    },
    [theme.breakpoints.between(1280,1460)]: {
      width: "80%",
    },
    [theme.breakpoints.between("ml","xl")]: {
      width: "70%",
    },
  },
  hBottom: {
    background: "#3d3d3d",
    color: "#eee",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".5em 0",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
}))

const Main = props => {
  const classes = useStyles()
  const { darkMode } = useSelector(state => state.theme)
  const { open } = useSelector(state => state.menu)
  const root = [classes.root, darkMode ? classes.dark : classes.light].join(" ")
  const dispatch=useDispatch()
  const matches = useMediaQuery("(max-width:960px)")
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h4">BARTÓK és BARTÓK</Typography>
      </div>
      <div className={classes.hBottom}>
        <Typography variant="h5">
          Adószakértő, Könyvelő és Tanácsadó Kft.
        </Typography>
      </div>
      <Paper
        classes={{
          root: root,
        }}
        elevation={24}
      >
        {/* {(matches && open) ? <Backdrop open={open} > */}
          <Header />
        {/* </Backdrop>:<Header />} */}
        {props.children}
       {!matches ?  <RightSide />:<SecondaryBottom/>}
        <div className={classes.bottom}>
          <Divider />
          <Bottom />
        </div>
      </Paper>
    </div>
  )
}

export default Main
