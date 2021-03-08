import { Grid, useMediaQuery } from "@material-ui/core"
import React from "react"

const ContentWrapper = props => {
  const matches = useMediaQuery("(max-width:960px)")
  const small = useMediaQuery("(max-width:476px)")
  return (
    <Grid
      xs={small ? 11 : matches ? 9 : 6}
      container
      direction="column"
    >
      {props.children}
    </Grid>
  )
}

export default ContentWrapper
