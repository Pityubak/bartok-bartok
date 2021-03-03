import { Divider, makeStyles, Paper } from "@material-ui/core"
import React from "react"
import Bottom from "../layout/bottom"
import Content from "./content"
import Header from "./header"
import RightSide from "./rightSide"

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    zIndex: "2000",
    width: "70%",
    height: "115vh",
    left: "50%",
    top: "50%",
    marginTop: "100px",
    transform: "translate(-50%,-50%)",
    background: "#EEEEEE",
    display:"flex",
    flexDirection:"column"
  },
  bottom:{
    width:"100%",
    position:"absolute",
    bottom:"0",
    left:"0",
    zIndex:"2001"

  }
}))
const Main = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={3}>
      <div >
        <Header />
        <Content />
        <RightSide />
      </div>
     
      <div className={classes.bottom}>
      <Divider/>
        <Bottom/>
      </div>
    </Paper>
  )
}

export default Main
