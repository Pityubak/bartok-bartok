import {
  Collapse,
  Drawer,
  Grid,
  List,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core"
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
import { StyledListItem, StyledListItemIcon, StyledListItemText } from "../../theme/styled"
import { itemTheme} from "../../theme/theme"

const drawerWidth = 300

const useStyles = makeStyles(theme => ({

  nested: {
    paddingLeft: theme.spacing(4),
  },
  deepNested: {
    paddingLeft: theme.spacing(7),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    background:"#468189",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  item: {
    background: "#468189",
  },
}))

const Header = () => {
  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(0)

  return (
    <ThemeProvider theme={itemTheme}>
      <Grid container alignItems="center">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div />
          <List>
            <StyledListItem
              selected={selected === 1}
              button
              key={"about"}
              onClick={() => setSelected(1)}
            >
              <StyledListItemIcon>
                <Info fontSize="large" />
              </StyledListItemIcon>
              <StyledListItemText primary={"Bemutatkozás"} />
            </StyledListItem>

            <StyledListItem
              selected={selected === 2}
              button
              key={"services"}
              onClick={() => {
                if (index === 0) {
                  setIndex(1)
                } else {
                  setIndex(0)
                }
                setSelected(2)
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
                <StyledListItem
                  button
                  className={classes.nested}
                  selected={selected === 3}
                  onClick={() => setSelected(3)}
                >
                  <StyledListItemIcon>
                    <Equalizer fontSize="large" />
                  </StyledListItemIcon>
                  <StyledListItemText primary=" Igazságügyi adó és járulék szakértés" />
                </StyledListItem>
                <StyledListItem
                  selected={selected === 4}
                  button
                  className={classes.nested}
                  onClick={() => {
                    if (index !== 2) {
                      setIndex(2)
                    } else {
                      setIndex(1)
                    }
                    setSelected(4)
                  }}
                >
                  <StyledListItemIcon>
                    <StrikethroughS fontSize="large"/>
                  </StyledListItemIcon>
                  <StyledListItemText primary=" Számviteli szolgáltatás" />
                  {index === 2 ? <ExpandLess /> : <ExpandMore />}
                </StyledListItem>
                <Collapse in={index === 2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <StyledListItem
                      button
                      className={classes.deepNested}
                      selected={selected === 5}
                      onClick={() => setSelected(5)}
                    >
                      <StyledListItemIcon>
                        <Money fontSize="large"/>
                      </StyledListItemIcon>
                      <StyledListItemText primary="Adóbevallás" />
                    </StyledListItem>
                    <StyledListItem
                      button
                      className={classes.deepNested}
                      selected={selected === 6}
                      onClick={() => setSelected(6)}
                    >
                      <StyledListItemIcon>
                        <MonetizationOn fontSize="large"/>
                      </StyledListItemIcon>
                      <StyledListItemText primary="Bérszámfejtés, munkaügy" />
                    </StyledListItem>
                    <StyledListItem
                      button
                      className={classes.deepNested}
                      selected={selected === 7}
                      onClick={() => setSelected(7)}
                    >
                      <StyledListItemIcon>
                        <Gavel fontSize="large"/>
                      </StyledListItemIcon>
                      <StyledListItemText primary="Szabályzat készítés" />
                    </StyledListItem>
                    <StyledListItem
                      button
                      className={classes.deepNested}
                      selected={selected === 8}
                      onClick={() => setSelected(8)}
                    >
                      <StyledListItemIcon>
                        <LiveHelp fontSize="large" />
                      </StyledListItemIcon>
                      <StyledListItemText primary="Cégalapításhoz segítségnyújtás" />
                    </StyledListItem>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Grid>
    </ThemeProvider>
  )
}

export default Header
