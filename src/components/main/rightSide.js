import {
  Divider,
  Drawer,
  List,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core"
import { Business, Email, Phone, SettingsBrightness } from "@material-ui/icons"
import React from "react"
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "../../theme/styled"
import WaveDark from "../../assets/wave_dark.svg"
import WaveLight from "../../assets/wave_light.svg"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../slices/themeSlice"
import { THEME } from "../../theme/theme"

const drawerWidth = 225
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#ECECEE",
  },
  wave: {
    position: "fixed",
    bottom: 0,
    left: 0,
    paddingBottom: 10,
  },

  item: {
    margin: ".8em 0em",
    textAlign: "center",
    "&:hover": {
      background: "#ECECEE",
    },
  },
  fluid: {
    height: "125px",
    width: "100%",
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
  darkIcon:{
    color: THEME.light,
    "&:hover": {
      color: "#F7CE3B",
    },
  },
  lightIcon:{
    color: "#212121",
    "&:hover": {
      color: THEME.primary,
    },
  },
  dark: {
    background: THEME.dark,
    color: THEME.light,
    "&:hover": {
      background: THEME.dark,
    },
  },
  darkPaper: {
    background: THEME.dark,
    color: THEME.light,
  },
  light: {
    background: THEME.light,
    "&:hover": {
      background: THEME.light,
    },
  },
  lightPaper: {
    background: THEME.light,
  },
  color_light: {
    color: THEME.light,
  },
  color_dark: {
    color: THEME.dark,
  },
}))
const VerticalListItem = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})(StyledListItem)

const Icon = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "3000",
  },
})(StyledListItemIcon)
const RightSide = () => {
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
    // `linear-gradient(153deg, rgba(33, 33, 33, .6) 0%, rgba(33, 33, 33, .6) 70%)`,
    data.bg.childImageSharp.fluid,
  ]

  const { darkMode } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const paper = [
    classes.drawerPaper,
    darkMode ? classes.darkPaper : classes.lightPaper,
  ].join(" ")
  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: paper
      }}
    >
      <BackgroundImage fluid={fluid}>
        <div className={classes.fluid}></div>
      </BackgroundImage>
      <List>
        <VerticalListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          className={classes.item}
        >
          <Icon
            classes={{
              root: darkMode ? classes.color_light : classes.color_dark,
            }}
          >
            <Phone fontSize="large" />
          </Icon>
          <StyledListItemText>(06 36) 789 610</StyledListItemText>
        </VerticalListItem>
        <VerticalListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          className={classes.item}
        >
          <Icon
            classes={{
              root: darkMode ? classes.color_light : classes.color_dark,
            }}
          >
            <Email fontSize="large" />
          </Icon>
          <StyledListItemText>bartokbartok.kft@gmail.com</StyledListItemText>
        </VerticalListItem>
        <VerticalListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          className={classes.item}
        >
          <Icon
            classes={{
              root: darkMode ? classes.color_light : classes.color_dark,
            }}
          >
            <Business fontSize="large" />
          </Icon>
          <StyledListItemText>3300, Eger, Cifrakapu u. 124</StyledListItemText>
        </VerticalListItem>
        <Divider />
        <StyledListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          dense
          className={classes.item}
        >
          <StyledListItemText>Adószám: 32984343-1-04</StyledListItemText>
        </StyledListItem>
        <StyledListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          divider
          dense
          className={classes.item}
        >
          <StyledListItemText>Cégjegyzékszám: 07-01-018288</StyledListItemText>
        </StyledListItem>
      </List>
      <div
        className={[classes.themeIcon, darkMode ? classes.darkIcon:classes.lightIcon].join(' ')}
        onClick={() => dispatch(switchTheme(!darkMode))}
      >
        <SettingsBrightness fontSize="large" />
        <Typography variant="h5">
          {!darkMode ? "Sötét mód" : "Világos mód"}
        </Typography>
      </div>

    </Drawer>
  )
}

export default RightSide
