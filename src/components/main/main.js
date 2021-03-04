import { Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import Bottom from "../layout/bottom"
import Content from "./content"
import Header from "./header"
import RightSide from "./rightSide"

const useStyles = makeStyles(() => ({
  root: {
    // position: "absolute",
    zIndex: "2001",
    width: "100%",
    height: "115vh",
    // left: "50%",
    // top: "50%",
    // // marginTop: "100px",
    // transform: "translate(-50%,-50%)",
    background: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bottom: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "2001",
  },
  header: {
    background: "#212121",
    height: "100px",
    zIndex: "2001",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
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
    width: "100%",
    background: "#3d3d3d",
    color: "#eee",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".5em 0",
  },
}))
const Main = props => {
  const classes = useStyles()
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
      <Paper className={classes.root} elevation={3}>
        <div>
          <Header />
          {props.children}
          <RightSide />
        </div>

        <div className={classes.bottom}>
          <Divider />
          <Bottom />
        </div>
      </Paper>
    </div>
  )
}

export default Main
