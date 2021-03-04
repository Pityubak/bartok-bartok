import { Divider, Grid, makeStyles, withStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

const useStyles = makeStyles(() => ({
  root: {
    height: "100px",
    width: "400px",
    
  },
  container:{
    width:"675px",
    background:"#212121",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"-35px"
  }
}))

const Content = () => {
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "temporary.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const fluid = [
    `linear-gradient(153deg, rgba(33, 33, 33, .6) 0%, rgba(33, 33, 33, .6) 70%)`,
    data.bg.childImageSharp.fluid,
  ]
  return (
    <>
      {/* <Grid className={classes.container}>
        <Grid className={classes.root}>
          <BackgroundImage >
            <Grid className={classes.root}></Grid>
          </BackgroundImage>
        </Grid>
      </Grid>
      <Divider/> */}
    </>
  )
}

export default Content
