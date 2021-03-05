import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import { BusinessCenter, SettingsApplications } from "@material-ui/icons"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { changeBottom } from "../../slices/menu"

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
    color:"#0F8B8D",
    '&:hover':{
      color:"#A1171B"
    },
    // '&:focus':{
    //   color:"#A1171B"
    // }
  },
})

export default function Bottom() {
  const classes = useStyles()
  const dispatch=useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(changeBottom(newValue))
  }
  const style = {
    fontSize: "42px",
  }
  
  const {bottom}=useSelector(state=>state.menu)
  return (
    <BottomNavigation
     showLabels
      value={bottom}
      onChange={handleChange}
      className={classes.root}
    >
      
        <BottomNavigationAction
          label="Üzemeltető"
          value="recents"
          icon={<Link className={classes.link}
           to="/uzemelteto/"><BusinessCenter style={style} /></Link>}
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
