import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import { BusinessCenter, Face, SettingsApplications } from "@material-ui/icons"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { changeBottom } from "../../slices/menu"
import { Tooltip } from "@material-ui/core"
import { THEME } from "../../theme/theme"

const useStyles = makeStyles({
  root: {
    width: "100%",
    // background:"rgba(198, 197, 185, .4)",
    fontSize: "40px !important",
    padding: ".4em 0em",
    color: "#A97C73",
  },
  dark: {
    background: THEME.bottom,
  },
  light: {
    background: "#fff",
  },
  darkLabel: {
    color: THEME.bottom_dark,
  },
  lightLabel: {
    color: THEME.bottom_light,

  },
  link: {
    textDecoration: "none",
    outline: "none",
    // color: "#0F8B8D",

  },
  tooltip: {
    fontSize: "1.6rem",
    zIndex: "3000",
  },
})

export default function Bottom() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { darkMode } = useSelector(state => state.theme)
  const handleChange = (event, newValue) => {
    dispatch(changeBottom(newValue))
  }
  const style = {
    fontSize: "42px",
  }

  const { bottom } = useSelector(state => state.menu)
  return (
    <BottomNavigation
      showLabels
      value={bottom}
      onChange={handleChange}
      className={[classes.root, darkMode ? classes.dark : classes.light].join(
        " "
      )}
    >
      <Tooltip
        className={classes.tooltip}
        title={"Tovább az Üzemeltető aloldalra"}
        arrow
      >
        <BottomNavigationAction
          classes={{
            label: darkMode ? classes.darkLabel : classes.lightLabel,
   
          }}
          label="Üzemeltető"
          value="recents"
          icon={
            <Link className={[classes.link, darkMode ? classes.darkLabel : classes.lightLabel].join(" ")} to="/uzemelteto/">
              <BusinessCenter style={style} />
            </Link>
          }
        />
      </Tooltip>

      <Tooltip
        className={classes.tooltip}
        title={"Tovább a Szolgáltatásaink aloldalra"}
        arrow
      >
        <BottomNavigationAction
          classes={{
            label: darkMode ? classes.darkLabel : classes.lightLabel,
   
          }}
          label="Szolgáltatásaink"
          value="favorites"
          icon={
            <Link className={[classes.link, darkMode ? classes.darkLabel : classes.lightLabel].join(" ")} to="/szolgaltatasaink/">
              <SettingsApplications style={style} />
            </Link>
          }
        />
      </Tooltip>

      <Tooltip
        className={classes.tooltip}
        title={"Tovább a Munkatársaink aloldalra"}
        arrow
      >
        <BottomNavigationAction
          classes={{
            label: darkMode ? classes.darkLabel : classes.lightLabel,

          }}
          label="Munkatársaink"
          value="nearby"
          icon={
            <Link className={[classes.link, darkMode ? classes.darkLabel : classes.lightLabel].join(" ")} to="/munkatarsaink/">
              <Face style={style} />
            </Link>
          }
        />
      </Tooltip>
    </BottomNavigation>
  )
}
