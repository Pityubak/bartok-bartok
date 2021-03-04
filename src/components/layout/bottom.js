import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import { BusinessCenter, SettingsApplications } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles({
  root: {
    width: "100%",
    // background:"rgba(198, 197, 185, .4)",
    fontSize: "40px !important",
    padding:".4em 0em",
    color:"#A97C73",
  },
  link: {
    textDecoration: "none",
    outline:"none",
    color:"#A97C73",
    '&:active':{
      color:"red"
    }
  },
})

export default function Bottom() {
  const classes = useStyles()
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const style = {
    fontSize: "42px",
  }

  return (
    <BottomNavigation
    showLabels
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      
        <BottomNavigationAction
          label="Üzemeltető"
          value="recents"
          icon={<Link className={classes.link} to="/uzemelteto/"><BusinessCenter style={style} /></Link>}
        />
   
      
        <BottomNavigationAction
          label="Szolgáltatásaink"
          value="favorites"
          icon={<Link className={classes.link} to="/szolgaltatasaink/"><SettingsApplications style={style} /></Link>}
        />
     
      
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<Link className={classes.link} to="/uzemelteto/"><LocationOnIcon style={style} /></Link>}
        />
      
    </BottomNavigation>
  )
}
