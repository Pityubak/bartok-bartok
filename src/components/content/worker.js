import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core"
  import { Email,  Phone } from "@material-ui/icons"
  import { graphql, useStaticQuery } from "gatsby"
  import React from "react"
  
  const useStyles = makeStyles(theme => ({
    root: {},
    header: {
      textAlign: "center",
      margin: "1em 0em",
    },
    typo: {
      fontSize: "14px",
      padding: ".5em",
      margin: ".5em 0em",
    },
    card: {
      marginTop: "1em",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    contact:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        fontSize:"13px"
    }
  }))
  const Worker = () => {
    const data = useStaticQuery(
      graphql`
        query {
          av1: file(relativePath: { eq: "avatar1.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          av2: file(relativePath: { eq: "avatar2.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          av3: file(relativePath: { eq: "avatar3.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )
    const classes = useStyles()
    return (
      <Grid xs={6} className={classes.root} container direction="column">
        <Typography className={classes.header} variant="h4">
          Munkatársaink
        </Typography>
        <Divider />
        <Card className={classes.card} raised>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Kép a dolgozókról"
                className={classes.large}
                alt="Kép"
                src={data.av1.childImageSharp.fluid.src}
              />
            }
            title="Harmon Rabb"
            subheader="Adószakértő, könyvelő"
            action={
             <div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Email/>
                       
                     </IconButton>
                     <Typography variant="span">valaki123aki@gmail.com</Typography>
                 </div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Phone/>
                        
                     </IconButton>
                     <Typography variant="span">(06 xx) xxx-yy-yy</Typography>
                 </div>
             </div>
            }
          />
          <CardContent>
          <Typography className={classes.typo} variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
          efficitur, pulvinar porttitor magna sagittis.
        </Typography>
          </CardContent>
      
        </Card>
        <Card className={classes.card} raised>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Kép a dolgozókról"
                className={classes.large}
                alt="Kép"
                src={data.av2.childImageSharp.fluid.src}
              />
            }
            title="Bud Roberts"
            subheader="Adószakértő, könyvelő"
            action={
             <div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Email/>
                       
                     </IconButton>
                     <Typography variant="span">valaki123aki@gmail.com</Typography>
                 </div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Phone/>
                        
                     </IconButton>
                     <Typography variant="span">(06 xx) xxx-yy-yy</Typography>
                 </div>
             </div>
            }
          />
          <CardContent>
          <Typography className={classes.typo} variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
          efficitur, pulvinar porttitor magna sagittis.
        </Typography>
          </CardContent>
      
        </Card>
        <Card className={classes.card} raised>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Kép a dolgozókról"
                className={classes.large}
                alt="Kép"
                src={data.av3.childImageSharp.fluid.src}
              />
            }
            title="Sarah Mackenzie"
            subheader="Adószakértő, könyvelő"
            action={
             <div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Email/>
                       
                     </IconButton>
                     <Typography variant="span">valaki123aki@gmail.com</Typography>
                 </div>
                 <div className={classes.contact}>
                     <IconButton>
                         <Phone/>
                        
                     </IconButton>
                     <Typography variant="span">(06 xx) xxx-yy-yy</Typography>
                 </div>
             </div>
            }
          />
          <CardContent>
          <Typography className={classes.typo} variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
          efficitur, pulvinar porttitor magna sagittis.
        </Typography>
          </CardContent>
      
        </Card>
      </Grid>
    )
  }
  
  export default Worker
  