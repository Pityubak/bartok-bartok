import { Collapse, Drawer, List, makeStyles } from "@material-ui/core"
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
import React, { useState } from "react"
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "../../theme/styled"
import Wave from "../../assets/wave.svg"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { changeIndex, changeSelected } from "../../slices/menu"

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
    background: "#A1171B",
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
  item: {
    background: "#6A0971",
  },
  root: {
    position: "relative",
  },
  wave: {
    position: "fixed",
    bottom: 0,
    left: 0,
    paddingBottom: 10,
  },
  link: {
    textDecoration: "none",
  },
}))

const Header = () => {
  const classes = useStyles()


  const { index, selected } = useSelector(state => state.menu)
  const dispatch = useDispatch()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        <Link className={classes.link} to="/bemutatkozas/">
          <StyledListItem
            selected={selected === 1}
            button
            key={"about"}
            onClick={() => dispatch(changeSelected(1))}
          >
            <StyledListItemIcon>
              <Info fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary={"Bemutatkozás"} />
          </StyledListItem>
        </Link>

        <StyledListItem
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
          <StyledListItemText>
            <Functions fontSize="large" />
          </StyledListItemText>
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
                button
                className={classes.nested}
                selected={selected === 3}
                onClick={() => dispatch(changeSelected(3))}
              >
                <StyledListItemIcon>
                  <Equalizer fontSize="large" />
                </StyledListItemIcon>
                <StyledListItemText primary=" Igazságügyi adó és járulék szakértés" />
              </StyledListItem>
            </Link>
            <StyledListItem
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
              <StyledListItemIcon>
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
                    button
                    className={classes.deepNested}
                    selected={selected === 5}
                    onClick={() => dispatch(changeSelected(5))}
                  >
                    <StyledListItemIcon>
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
                    button
                    className={classes.deepNested}
                    selected={selected === 6}
                    onClick={() => dispatch(changeSelected(6))}
                  >
                    <StyledListItemIcon>
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
                    button
                    className={classes.deepNested}
                    selected={selected === 7}
                    onClick={() => dispatch(changeSelected(7))}
                  >
                    <StyledListItemIcon>
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
                    button
                    className={classes.deepNested}
                    selected={selected === 8}
                    onClick={() => dispatch(changeSelected(8))}
                  >
                    <StyledListItemIcon>
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
      <div className={classes.wave}>
        <Wave />
      </div>
    </Drawer>
  )
}

export default Header
