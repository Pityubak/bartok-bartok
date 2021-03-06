import { Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux"
import Bottom from "../layout/bottom"

import Header from "./header"
import RightSide from "./rightSide"

const useStyles = makeStyles(() => ({
  root: {
    zIndex: "2001",
    width: "100%",
    height: "115vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  darkRoot:{
    background:"#212121",
    color:"#eee"
  },
  lightRoot:{
    background: "#ECECEE",
  },
  bottom: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "2001",
  },
  header: {
    // background: "#2c2c25",

    height: "100px",
    zIndex: "2001",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
    fontWeight: "600",
  },
  dark: {
    background: "#2c2c25",
  
  },
  light: {
    background: "#17A19D",
 
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
  const { darkMode }=useSelector(state=>state.theme)
  return (
    <div className={classes.container}>
      <div className={[classes.header,darkMode ? classes.dark :classes.light].join(' ')}>
        <Typography variant="h4">BARTÓK és BARTÓK</Typography>
      </div>
      <div className={classes.hBottom}>
        <Typography variant="h5">
          Adószakértő, Könyvelő és Tanácsadó Kft.
        </Typography>
      </div>
      <Paper className={[classes.root,darkMode ? classes.darkRoot :classes.lightRoot].join(' ')} elevation={24}>
        {/* <div className={classes.content}> */}
        <Header />
        {props.children}
        <RightSide />
        {/* </div> */}

        <div className={classes.bottom}>
          <Divider />
          <Bottom />
        </div>
      </Paper>
    </div>
  )
}

export default Main
