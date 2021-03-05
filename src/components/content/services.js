import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { Link } from "gatsby"
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
  heading: {
    fontSize: theme.typography.pxToRem(24),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordion: {
    marginTop: "2rem",
  },
}))
const Services = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <Grid xs={6} className={classes.root} container direction="column">
      <Typography className={classes.header} variant="h3">
        Szolgáltatásaink
      </Typography>

      <div className={classes.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              Igazságügyi adó és járulék szakértés
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Link to="/szolgaltatasaink/szamviteli-szolgaltatas/szabalyzat-keszites/">
              <Button size="large">Tovább olvasom</Button>
            </Link>
          </AccordionActions>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Adóbevallás</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Link to="/szolgaltatasaink/szamviteli-szolgaltatas/adobevallas/">
              <Button size="large">Tovább olvasom</Button>
            </Link>
          </AccordionActions>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Bérszámfejtés, munkaügy
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Link  to="/szolgaltatasaink/szamviteli-szolgaltatas/berszamfejtes-munkaugy/">
              <Button size="large">Tovább olvasom</Button>
            </Link>
          </AccordionActions>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              Szabályzat készítés
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Link to="/szolgaltatasaink/szamviteli-szolgaltatas/szabalyzat-keszites/">
              <Button size="large">Tovább olvasom</Button>
            </Link>
          </AccordionActions>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              Cégalapításhoz segítségnyújtás
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Link to="/szolgaltatasaink/szamviteli-szolgaltatas/cegalapitashoz-segitsegnyujtas/">
              <Button size="large">Tovább olvasom</Button>
            </Link>
          </AccordionActions>
        </Accordion>
      </div>
    </Grid>
  )
}

export default Services
