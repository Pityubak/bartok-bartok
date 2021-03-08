import { Grid, Icon, makeStyles, Typography } from "@material-ui/core"
import { Business, Email, Phone } from "@material-ui/icons"
import React from "react"
import { THEME } from "../../theme/theme"

const useStyles = makeStyles(() => ({
  root: {
    background: THEME.light_hover,
   
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    padding:"1rem",
  },
  item:{
      display:"flex",
      flexDirection:"column",
       alignItems:"center",
     
  }
}))
const SecondaryBottom = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} alignItems="center" className={classes.root}>
      <div className={classes.item}>
        <Icon>
          <Phone />
        </Icon>
        <Typography>(06 36) 789 610</Typography>
      </div>
      <div className={classes.item}>
        <Icon>
          <Email />
        </Icon>
        <Typography>bartokbartok.kft@gmail.com</Typography>
      </div>
      <div className={classes.item}>
        <Icon>
          <Business />
        </Icon>
        <Typography>3300, Eger, Cifrakapu u. 124</Typography>
      </div>
    </Grid>
  )
}

export default SecondaryBottom
