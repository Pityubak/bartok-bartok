import { Collapse, Drawer, List, makeStyles, useMediaQuery } from "@material-ui/core"
import {
  Equalizer,
  ExpandLess,
  ExpandMore,
  Functions,
  Gavel,
  Info,
  LiveHelp,
  MonetizationOn,
  Money,
  StrikethroughS,
} from "@material-ui/icons"
import React, { useEffect } from "react"
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "../../theme/styled"
import WaveLight from "../../assets/wave_light.svg"
import WaveDark from "../../assets/wave_dark.svg"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { changeIndex, changeSelected } from "../../slices/menu"
import { THEME } from "../../theme/theme"

const drawerWidth = 225

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(3),
  },
  deepNested: {
    paddingLeft: theme.spacing(6),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // position:"relative"
    transform: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    // background:"#ECECEE",
    // background: "#36311F",
    position: "absolute",
    transform: "none",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    position: "relative",
  },
  wave: {
    position: "fixed",
    bottom: 0,
    left: 0,
    paddingBottom: 10,
    svg: {},
  },
  link: {
    textDecoration: "none",
  },
  dark: {
    background: THEME.dark,
    color: THEME.light,
    '&:hover':{
      background:THEME.dark_hover,
  }
},
darkPaper: {
  background: THEME.dark,
  color: THEME.light,

  
  },
  light: {
    background: THEME.light,
    '&:hover':{
      background:THEME.light_hover,
  }
  },
  lightPaper: {
    background: THEME.light,

    
  },
  color_light:{
    color: THEME.light,
  },
  color_dark:{
    color:THEME.dark
  }
}))

const Header = () => {
  const classes = useStyles()

  const { index, selected,open } = useSelector(state => state.menu)
  const { darkMode } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const paper = [
    classes.drawerPaper,
    darkMode ? classes.darkPaper : classes.lightPaper,
  ].join(" ")
  const matches = useMediaQuery("(max-width:960px)")
  
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={!matches || open}
      classes={{
        paper: paper,
      }}
      anchor="left"
    >
      <List>
        <Link className={classes.link} to="/bemutatkozas/">
          <StyledListItem
            classes={{
              root: darkMode ? classes.dark : classes.light,
            }}
            selected={selected === 1}
            button
            key={"about"}
            onClick={() => dispatch(changeSelected(1))}
          >
            <StyledListItemIcon
              classes={{
                root: darkMode ? classes.color_light : classes.color_dark,
              }}
            >
              <Info fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary={"Bemutatkozás"} />
          </StyledListItem>
        </Link>

        <StyledListItem
          classes={{
            root: darkMode ? classes.dark : classes.light,
          }}
          selected={selected === 2}
          button
          key={"services"}
          onClick={() => {
            if (index === 0) {
              dispatch(changeIndex(1))
            } else {
              dispatch(changeIndex(0))
            }
            dispatch(changeSelected(2))
          }}
        >
          <StyledListItemIcon
            classes={{
              root: darkMode ? classes.color_light : classes.color_dark,
            }}
          >
            <Functions fontSize="large" />
          </StyledListItemIcon>
          <StyledListItemText primary={"Szolgáltatásaink"} />
          {index === 1 ? <ExpandLess /> : <ExpandMore />}
        </StyledListItem>
        <Collapse in={index > 0} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              className={classes.link}
              to="/szolgaltatasaink/jarulek-szakertes/"
            >
              <StyledListItem
                classes={{
                  root: darkMode ? classes.dark : classes.light,
                }}
                button
                className={classes.nested}
                selected={selected === 3}
                onClick={() => dispatch(changeSelected(3))}
              >
                <StyledListItemIcon
                  classes={{
                    root: darkMode ? classes.color_light : classes.color_dark,
                  }}
                >
                  <Equalizer fontSize="large" />
                </StyledListItemIcon>
                <StyledListItemText primary=" Igazságügyi adó és járulék szakértés" />
              </StyledListItem>
            </Link>
            <StyledListItem
              classes={{
                root: darkMode ? classes.dark : classes.light,
              }}
              selected={selected === 4}
              button
              className={classes.nested}
              onClick={() => {
                if (index !== 2) {
                  dispatch(changeIndex(2))
                } else {
                  dispatch(changeIndex(1))
                }
                dispatch(changeSelected(4))
              }}
            >
              <StyledListItemIcon
                classes={{
                  root: darkMode ? classes.color_light : classes.color_dark,
                }}
              >
                <StrikethroughS fontSize="large" />
              </StyledListItemIcon>
              <StyledListItemText primary=" Számviteli szolgáltatás" />
              {index === 2 ? <ExpandLess /> : <ExpandMore />}
            </StyledListItem>
            <Collapse in={index === 2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className={classes.link}
                  to="/szolgaltatasaink/szamviteli-szolgaltatas/adobevallas/"
                >
                  <StyledListItem
                    classes={{
                      root: darkMode ? classes.dark : classes.light,
                    }}
                    button
                    className={classes.deepNested}
                    selected={selected === 5}
                    onClick={() => dispatch(changeSelected(5))}
                  >
                    <StyledListItemIcon
                      classes={{
                        root: darkMode ? classes.color_light : classes.color_dark,
                      }}
                    >
                      <Money fontSize="large" />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Adóbevallás" />
                  </StyledListItem>
                </Link>
                <Link
                  className={classes.link}
                  to="/szolgaltatasaink/szamviteli-szolgaltatas/berszamfejtes-munkaugy/"
                >
                  <StyledListItem
                    classes={{
                      root: darkMode ? classes.dark : classes.light,
                    }}
                    button
                    className={classes.deepNested}
                    selected={selected === 6}
                    onClick={() => dispatch(changeSelected(6))}
                  >
                    <StyledListItemIcon
                      classes={{
                        root: darkMode ? classes.color_light : classes.color_dark,
                      }}
                    >
                      <MonetizationOn fontSize="large" />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Bérszámfejtés, munkaügy" />
                  </StyledListItem>
                </Link>
                <Link
                  className={classes.link}
                  to="/szolgaltatasaink/szamviteli-szolgaltatas/szabalyzat-keszites/"
                >
                  <StyledListItem
                    classes={{
                      root: darkMode ? classes.dark : classes.light,
                    }}
                    button
                    className={classes.deepNested}
                    selected={selected === 7}
                    onClick={() => dispatch(changeSelected(7))}
                  >
                    <StyledListItemIcon
                      classes={{
                        root: darkMode ? classes.color_light : classes.color_dark,
                      }}
                    >
                      <Gavel fontSize="large" />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Szabályzat készítés" />
                  </StyledListItem>
                </Link>
                <Link
                  className={classes.link}
                  to="/szolgaltatasaink/szamviteli-szolgaltatas/cegalapitashoz-segitsegnyujtas/"
                >
                  <StyledListItem
                    classes={{
                      root: darkMode ? classes.dark : classes.light,
                    }}
                    button
                    className={classes.deepNested}
                    selected={selected === 8}
                    onClick={() => dispatch(changeSelected(8))}
                  >
                    <StyledListItemIcon
                      classes={{
                        root: darkMode ? classes.color_light : classes.color_dark,
                      }}
                    >
                      <LiveHelp fontSize="large" />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Cégalapításhoz segítségnyújtás" />
                  </StyledListItem>
                </Link>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Drawer>
  )
}

export default Header
