import {
    Button,
  Divider,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { Send } from "@material-ui/icons"
import React from "react"
import { StyledListItemText } from "../../theme/styled"

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
  btn:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"1rem"
  }
})
const Operator = () => {
  const classes = useStyles()
  return (
    <Grid xs={6} className={classes.root} container direction="column">
      <Typography className={classes.header} variant="h3">
        Üzemeltető
      </Typography>
      <Divider />
      <Typography className={classes.header} variant="h5">
        A www.domainnév.hu üzemeltetője a <strong>Bartók és Bartók Kft.</strong>
      </Typography>

      <List>
        <ListItem>
          <StyledListItemText>
            Cím: 3300, Eger, Cifrakapu u. 124
          </StyledListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemText>Adószám: 32984343-1-04</StyledListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemText>Cégjegyzékszám: 07-01-018288</StyledListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemText>Telefon: (06 36) 789 610</StyledListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemText>Email: bartokbartok.kft@gmail.com</StyledListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemText>Kamara: Heves Megyei Kereskedelmi és Iparkamara</StyledListItemText>
        </ListItem>
      </List>
      <Divider/>
      <Typography className={classes.header} variant="h5">
        A weboldal tárhelyszolgáltatója: <strong>Netlify</strong>
      </Typography>
      <div className={classes.btn}>
        <a href="https://www.netlify.com/" target="_blank" rel='noopener noreferrer'>
          <Button size="large"  endIcon={<Send />}>
            Tovább a tárhelyszolgátató oldalára
          </Button>
        </a>
      </div>

    </Grid>
  )
}

export default Operator
