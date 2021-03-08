import { AppBar, Grid, makeStyles, Typography } from "@material-ui/core"
import {Link} from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useSelector } from "react-redux"
import DarkImage from "./dark"
import LightImage from "./light"

const useStyles = makeStyles(theme => ({
  root: {
    

    height: "150vh",
    margin: "0 auto",
    position: "relative",
  },
  darkRoot:{
    background: "#36311F",
  },
  lightRoot:{
    background: "#ECECEE",
  },
  header: {
    width: "100%",
    height: "35vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
   
  },
  footer: {
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

  },
  dark:{
    color:"#000"
  },
  light:{
    color: "#fff",
  },
  main: {
    height: "105vh",
  
  },
  container: {
    flexGrow: 1,
  },
  link:{
    textDecoration:"none",
    cursor:"pointer"
  },
  tag:{
      textDecoration:"none",
      fontSize:"12px",
      fontWeight:500,
  }
}))

const Layout = props => {
  const { darkMode }=useSelector(state=>state.theme)
  const data = !darkMode ? DarkImage():LightImage()
  const imageData = data.allFile?.edges
  const logoData = data.icon.childImageSharp.fluid
  const classes = useStyles()
  const loadImage = () => {
    const index = Math.floor(Math.random() * imageData?.length)
    return imageData[index]
  }
  const img = loadImage()
  return (
    <div className={classes.container}>
      <Grid
     
        spacing={0}
        direction={"column"}
        alignItems="stretch"
        container
        className={[classes.root, darkMode ? classes.darkRoot:classes.lightRoot].join(' ')}
      >
        <AppBar position={"static"}>
       
          <BackgroundImage
            className={classes.bg}
            fluid={img?.node?.childImageSharp?.fluid}
          >
       
              <Grid item xs={12} className={classes.header}>
              <Link className={classes.link} to="/">
                <img
                  className={classes.logo}
                  src={logoData.src}
                  alt={"A Bartók és Bartók Kft logója"}
                />
                 </Link>
              </Grid>
          
          </BackgroundImage>
         
        </AppBar>
        {/* */}

        <Grid item className={classes.main}>
          {props.children}
        </Grid>

        <BackgroundImage fluid={img?.node?.childImageSharp?.fluid}>
          <Grid container  className={[classes.footer, !darkMode ? classes.dark :classes.light].join(' ')} direction="column">
            <Typography variant="h5">
              {" "}
              © {new Date().getFullYear()} Bartók és Bartók Kft.
            </Typography>
            <a className={[classes.tag, !darkMode ? classes.dark :classes.light].join(' ')} href="https://github.com/Pityubak" target="_blank" rel='noopener noreferrer'>Created by Pityubak</a>
          </Grid>
        </BackgroundImage>
      </Grid>
    </div>
  )
}

export default Layout
