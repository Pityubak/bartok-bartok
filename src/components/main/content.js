import { Grid, makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react"

const useStyles=makeStyles(()=>({
    root:{
        height:"300px"
    }
}))
const Content=()=>{
    const classes=useStyles();
    const data = useStaticQuery(
        graphql`
          query {
            bg: file(relativePath: { eq: "temporary.webp" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
      )

      const fluid=[`linear-gradient(153deg, rgba(33, 33, 33, .6) 0%, rgba(33, 33, 33, .6) 70%)`,data.bg.childImageSharp.fluid]
    return(
       <BackgroundImage fluid={fluid}>
            <Grid className={classes.root}>Teszt</Grid>
       </BackgroundImage>
    )
}

export default Content;