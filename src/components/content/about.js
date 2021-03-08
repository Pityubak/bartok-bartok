import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { Send } from "@material-ui/icons"
import {Link} from "gatsby"
import React from "react"

const useStyles = makeStyles(theme => ({
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
  card: {
    marginTop: "1em",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "13px",
  },
  btn:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"1rem"
  }
}))
const About = () => {

  const classes = useStyles()
  return (
    <Grid xs={6} className={classes.root} container direction="column">
      <Typography className={classes.header} variant="h3">
        Bemutatkozás
      </Typography>
      <Divider />
      <Typography className={classes.typo} >
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
      <Divider />
      <Typography className={classes.typo} >
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
      <Divider />
      <div className={classes.btn}>
        <Link to="/munkatarsaink/">
          <Button size="large"  endIcon={<Send />}>
            Tovább munkatársaink bemutatkozó oldalára
          </Button>
        </Link>
      </div>
    </Grid>
  )
}

export default About
