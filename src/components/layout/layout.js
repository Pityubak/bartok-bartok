import { AppBar, Grid, makeStyles, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#212121",
    height: "150vh",
    margin: "0 auto",
    position:"relative"
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
  },
  main: {
    height: "105vh",
  },
  container: {
    flexGrow: 1,
  },
}))

const Layout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { dir: { regex: "/background/" } }) {
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
        icon: file(relativePath: { eq: "logo1.png" }) {
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
          <BackgroundImage className={classes.bg} fluid={img?.node?.childImageSharp?.fluid}>
            <Grid item xs={12} className={classes.header}>
              <img
                className={classes.logo}
                src={logoData.src}
                alt={"A Bartók és Bartók Kft logója"}
              />
              <div>
                <Typography gutterBottom variant="h3">
                  BARTÓK és BARTÓK
                </Typography>
              </div>
              <div>
                <Typography variant="h4">
                  Adószakértő, Könyvelő és Tanácsadó Kft.
                </Typography>
              </div>
            </Grid>
          </BackgroundImage>
        </AppBar>
        {/* */}

        <Grid item className={classes.main}>
          {props.children}
        </Grid>

        <BackgroundImage fluid={img?.node?.childImageSharp?.fluid}>
          <Grid item xs={12} className={classes.footer}>
            {/* <Bottom /> */}
          </Grid>
        </BackgroundImage>
      </Grid>
    </div>
  )
}

export default Layout
