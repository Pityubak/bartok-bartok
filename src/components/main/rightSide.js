import { Divider, Drawer, List, makeStyles } from "@material-ui/core"
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
  wave:{
    position: "fixed",
    bottom: 0,
    left:0,
    paddingBottom: 10,
  },

  item: {
    margin: ".8em 0em",
      textAlign:"center",
    "&:hover": {
      background: "#A1171B",
    },
  },
  fluid:{
    height:"125px",
    width:"100%",
  
  }
}))
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
        <StyledListItem className={classes.item}>
          <StyledListItemIcon>
            <Phone fontSize="large" />
          </StyledListItemIcon>
          <StyledListItemText>(+36) 40/234-9967</StyledListItemText>
        </StyledListItem>
        <StyledListItem className={classes.item}>
          <StyledListItemIcon>
            <Email fontSize="large" />
          </StyledListItemIcon>
          <StyledListItemText>pelda@pelda.com</StyledListItemText>
        </StyledListItem>
        <StyledListItem className={classes.item}>
          <StyledListItemIcon>
            <Business fontSize="large" />
          </StyledListItemIcon>
          <StyledListItemText>
             3300, Eger, Cifrakapu u. 124
          </StyledListItemText>
        </StyledListItem>
        <Divider />
        <StyledListItem dense className={classes.item}>
          <StyledListItemText>Adószám: 32984343-1-04</StyledListItemText>
        </StyledListItem>
        <StyledListItem  dense className={classes.item}>
          <StyledListItemText>
          Cégjegyzékszám: 07-01-018288
          </StyledListItemText>
        </StyledListItem>
      </List>
      <div className={classes.wave}>
              <Wave />
            </div>
    </Drawer>
  )
}

export default RightSide
