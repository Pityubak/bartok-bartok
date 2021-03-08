import { Grid, makeStyles, useMediaQuery } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  root: {
    marginBottom: "2.5rem",
  },
})
const ContentWrapper = props => {
  const classes = useStyles()
  const matches = useMediaQuery("(max-width:960px)")
  const small = useMediaQuery("(max-width:476px)")
  return (
    <Grid
      xs={small ? 11 : matches ? 9 : 6}
      container
      direction="column"
      className={classes.root}
    >
      {props.children}
    </Grid>
  )
}

export default ContentWrapper
