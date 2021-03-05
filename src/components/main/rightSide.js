import {
  createStyles,
  Divider,
  Drawer,
  List,
  makeStyles,
  withStyles,
} from "@material-ui/core"
import { Business, Email, Phone } from "@material-ui/icons"
import React from "react"
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "../../theme/styled"
import Wave from "../../assets/wave.svg"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
    background: "#A1171B",
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
      background: "#A1171B",
    },
  },
  fluid: {
    height: "125px",
    width: "100%",
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

const Icon=withStyles({
  root:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
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
  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <BackgroundImage fluid={fluid}>
        <div className={classes.fluid}></div>
      </BackgroundImage>
      <List>
        <VerticalListItem className={classes.item}>
          <Icon>
            <Phone fontSize="large" />
          </Icon>
          <StyledListItemText>(06 36) 789 610</StyledListItemText>
        </VerticalListItem>
        <VerticalListItem className={classes.item}>
          <Icon>
            <Email fontSize="large" />
          </Icon>
          <StyledListItemText>bartokbartok.kft@gmail.com</StyledListItemText>
        </VerticalListItem>
        <VerticalListItem className={classes.item}>
          <Icon>
            <Business fontSize="large" />
          </Icon>
          <StyledListItemText>3300, Eger, Cifrakapu u. 124</StyledListItemText>
        </VerticalListItem>
        <Divider />
        <StyledListItem dense className={classes.item}>
          <StyledListItemText>Adószám: 32984343-1-04</StyledListItemText>
        </StyledListItem>
        <StyledListItem divider dense className={classes.item}>
          <StyledListItemText>Cégjegyzékszám: 07-01-018288</StyledListItemText>
        </StyledListItem>
      </List>
      <div className={classes.wave}>
        <Wave />
      </div>
    </Drawer>
  )
}

export default RightSide
