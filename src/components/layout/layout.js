import { AppBar, Grid, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#ECECEE",

    height: "150vh",
    margin: "0 auto",
    position: "relative",
  },
  header: {
    width: "100%",
    height: "35vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
  },
  footer: {
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#eee",
    fontSize: "2rem",
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
      color:"#fff"

  }
}))

const Layout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { dir: { regex: "/background_light/" } }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 1580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        icon: file(relativePath: { eq: "logo2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
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
        className={classes.root}
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
          <Grid container xs={12} className={classes.footer} direction="column">
            <Typography variant="h5">
              {" "}
              © {new Date().getFullYear()} Bartók és Bartók Kft.
            </Typography>
            <a className={classes.tag} href="https://github.com/Pityubak" target="_blank" rel='noopener noreferrer'><Typography>Created by Pityubak</Typography></a>
          </Grid>
        </BackgroundImage>
      </Grid>
    </div>
  )
}

export default Layout
