import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useDispatch, useSelector } from "react-redux"
import DarkImage from "./dark"
import LightImage from "./light"
import { THEME } from "../../theme/theme"
import { MenuOpen, SettingsBrightness } from "@material-ui/icons"
import { changeDrawer } from "../../slices/menu"
import { switchTheme } from "../../slices/themeSlice"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    position: "relative",
    [theme.breakpoints.up(960)]: {
      height: "150vh",
    },
  },
  darkRoot: {
    background: "#36311F",
  },
  lightRoot: {
    background: "#ECECEE",
  },
  header: {
    width: "100%",
    height: "35vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down(960)]: {
      flexDirection: "row",
      alignItems: "flex-start",
      height: "15vh",
    },
  },
  footer: {
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
  main: {
    [theme.breakpoints.up(960)]: {
      height: "105vh",
    },
  },
  container: {
    flexGrow: 1,
    [theme.breakpoints.down(960)]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },
  tag: {
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 500,
  },
  toolbar: {
    width: "100%",
    zIndex: "4000",
    // background: THEME.light,
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  themeIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "6rem",
    cursor: "pointer",
    transition: "all .3s ease-in",
  },
  darkToolbar: {
    background: THEME.dark,
  },
  lightToolbar: {
    background: THEME.light,
  },
  darkIcon: {
    color: THEME.light,
    "&:hover": {
      color: "#F7CE3B",
    },
  },
  lightIcon: {
    color: "#212121",
    "&:hover": {
      color: THEME.primary,
    },
  },
}))

const Layout = props => {
  const { darkMode } = useSelector(state => state.theme)
  const { open } = useSelector(state => state.menu)
  const data = !darkMode ? DarkImage() : LightImage()
  const imageData = data.allFile?.edges
  const logoData = data.icon.childImageSharp.fluid
  const classes = useStyles()
  const loadImage = () => {
    const index = Math.floor(Math.random() * imageData?.length)
    return imageData[index]
  }
  const img = loadImage()
  const dispatch = useDispatch()
  const matches = useMediaQuery("(max-width:960px)")
  return (
    <div className={classes.container}>
      <Grid
        spacing={0}
        direction={"column"}
        alignItems="stretch"
        container
        className={[
          classes.root,
          darkMode ? classes.darkRoot : classes.lightRoot,
        ].join(" ")}
      >
        <AppBar position={matches ? "fixed" : "static"}>
          <BackgroundImage
            className={classes.bg}
            fluid={img?.node?.childImageSharp?.fluid}
          >
            <Grid item xs={12} className={classes.header}>
              {matches ? (
                <Toolbar
                  className={[
                    classes.toolbar,
                    darkMode ? classes.darkToolbar : classes.lightToolbar,
                  ].join(" ")}
                >
                  <IconButton
                    aria-label="open drawer"
                    onClick={() => dispatch(changeDrawer(!open))}
                    edge="start"
                    size="medium"
                    className={darkMode ? classes.darkIcon : classes.lightIcon}
                    // className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuOpen fontSize="large" />
                  </IconButton>

                  {/* <Link className={classes.link} to="/">
                    <img
                      className={classes.logo}
                      src={logoData.src}
                      
                      height="60px"
                      alt={"A Bartók és Bartók Kft logója"}
                    />
                  </Link> */}
                  <div
                    className={[
                      classes.themeIcon,
                      darkMode ? classes.darkIcon : classes.lightIcon,
                    ].join(" ")}
                    onClick={() => dispatch(switchTheme(!darkMode))}
                  >
                    <SettingsBrightness fontSize="large" />
                    {/* <Typography variant="h5">
                      {!darkMode ? "Sötét mód" : "Világos mód"}
                    </Typography> */}
                  </div>
                </Toolbar>
              ) : (
                <Link className={classes.link} to="/">
                  <img
                    className={classes.logo}
                    src={logoData.src}
                    alt={"A Bartók és Bartók Kft logója"}
                  />
                </Link>
              )}
            </Grid>
          </BackgroundImage>
        </AppBar>
        {/* */}

        <Grid item className={classes.main}>
          {props.children}
        </Grid>

        <BackgroundImage fluid={img?.node?.childImageSharp?.fluid}>
          <Grid
            container
            className={[
              classes.footer,
              !darkMode ? classes.dark : classes.light,
            ].join(" ")}
            direction="column"
          >
            <Typography variant="h5">
              {" "}
              © {new Date().getFullYear()} Bartók és Bartók Kft.
            </Typography>
            <a
              className={[
                classes.tag,
                !darkMode ? classes.dark : classes.light,
              ].join(" ")}
              href="https://github.com/Pityubak"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by Pityubak
            </a>
          </Grid>
        </BackgroundImage>
      </Grid>
    </div>
  )
}

export default Layout
