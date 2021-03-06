import { Divider, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import ContentWrapper from "./contentWrapper"

const useStyles = makeStyles({
  root: {},
  header: {
    textAlign: "center",
    margin: "1em 0em",
  },
  typo: {
    fontSize: "14px",
    padding: ".5em",
    margin: ".5em 0em",
  },
})
const Tax = () => {
  const classes = useStyles()
  return (
    <ContentWrapper>
      <Typography className={classes.header} variant="h3">
        Adóbevallás
      </Typography>
      <Divider />
      <Typography className={classes.typo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
        ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
        efficitur, pulvinar porttitor magna sagittis. Quisque aliquam dignissim
        fermentum. Pellentesque a mattis diam. Sed tempor varius convallis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nulla ipsum tellus, tincidunt in vestibulum sed,
        tempus porttitor velit. Maecenas nibh enim, blandit eget rutrum ut,
        gravida sed nibh. Proin at sapien augue. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </Typography>
      <Typography className={classes.typo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
        ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
        efficitur, pulvinar porttitor magna sagittis. Quisque aliquam dignissim
        fermentum. Pellentesque a mattis diam. Sed tempor varius convallis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nulla ipsum tellus, tincidunt in vestibulum sed,
        tempus porttitor velit. Maecenas nibh enim, blandit eget rutrum ut,
        gravida sed nibh. Proin at sapien augue. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </Typography>
      <Typography className={classes.typo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
        ultricies magna, consequat vehicula ligula. Donec posuere sem vel felis
        efficitur, pulvinar porttitor magna sagittis. Quisque aliquam dignissim
        fermentum. Pellentesque a mattis diam. Sed tempor varius convallis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nulla ipsum tellus, tincidunt in vestibulum sed,
        tempus porttitor velit. Maecenas nibh enim, blandit eget rutrum ut,
        gravida sed nibh. Proin at sapien augue. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </Typography>
    </ContentWrapper>
  )
}

export default Tax
