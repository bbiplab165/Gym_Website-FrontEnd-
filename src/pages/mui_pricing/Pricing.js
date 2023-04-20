import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'
//import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
    
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
    "& .MuiTypography-h5": {
      fontSize: "3rem",
    },
  },
  image: {
    backgroundImage:
      'url("https://media.istockphoto.com/id/875207140/photo/sport-background-with-fitness-equipment-in-gym-gym.jpg?s=612x612&w=0&k=20&c=VEpZIAJ3wdlwHwvWuLumDmpsWczobiSH5kL981H5Cvk=")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  },
}));

export default function Pricing(props) {
  const classes = useStyles();

  const content = {
    //badge: "LOREM IPSUM",
    "header-p1": "Special Offers ",
    "header-p2": "Get It Now For Your Health ",
    description:
      "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted",
    //  option1: "Monthly",
    // option2: "Annual",
    "01_title": " Weekend Pass",
    "01_price": "INR 200",
    //"01_suffix": " / mo",
    "01_benefit1": "Unlimited Yoga Classes",
    "01_benefit2": "Aerobics",
    "01_benefit3": "Strength Training",
    //"01_benefit4": "10 GB Storage",
    "01_primary-action": "Select plan",
    // "01_secondary-action": "Learn more",
    "02_title": "Monthly Pass",
    "02_price": "INR 700",
    //"02_suffix": " / mo",
    "02_benefit1": "Unlimited Yoga Classes",
    "02_benefit2": "Aerobics, Dance",
    "02_benefit3": "Strength & CrossFit Training",
    //"02_benefit4": "25 GB Storage",
    "02_primary-action": "Select plan",
    //"02_secondary-action": "Learn more",
    "03_title": "Yearly Pass",
    "03_price": "INR 7500",
    //"03_suffix": " / mo",
    "03_benefit1": "Unlimited Yoga Classes",
    "03_benefit2": "Aerobics, Dance, Jujutsu",
    "03_benefit3": "Strength & CrossFit Training",
    // "03_benefit4": "50 GB Storage",
    "03_primary-action": "Select plan",
    //"03_secondary-action": "Learn more",
    ...props.content,
  };

  // const [state, setState] = React.useState({
  //   checkbox: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, checkbox: event.target.checked });
  // };

  return (
    <div className={classes.image}>
      <Navbar/>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Box py={8} textAlign="center">
            <Box mb={3}>
              <Container maxWidth="sm">
                {/* <Typography variant="overline" color="textSecondary">
                {content["badge"]}
              </Typography> */}
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography variant="h3"  component="span"  color="primary">
                    {content["header-p1"]}{" "}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="span"
                    style={{ color: "white" }}
                  >
                    {content["header-p2"]}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: "white" }}
                  paragraph={true}
                >
                  {content["description"]}
                </Typography>

                {/* <div>
                <Typography variant="subtitle1" component="span">
                  {content["option1"]}
                </Typography>
                &nbsp;{" "}
                <Switch
                  name="checkbox"
                  color="primary"
                  checked={state.checkbox}
                  onChange={handleChange}
                />{" "}
                &nbsp;
                <Typography variant="subtitle1" component="span">
                  {content["option2"]}
                </Typography>
              </div> */}
              </Container>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardHeader
                  style={{
                    color: 'red',
                    
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}}
                    title={content["01_title"]}
                    className={classes.cardHeader}
                  ></CardHeader>
                  <CardContent style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}}>
                    <Box px={1}>
                      <Typography
                        variant="h3"
                        style={{ color: "blue" }}
                        component="h2"
                        gutterBottom={true}
                      >
                        {content["01_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["01_suffix"]}
                        </Typography>
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["01_benefit1"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["01_benefit2"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["01_benefit3"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                        paragraph={true}
                      >
                        {content["01_benefit4"]}
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.primaryAction}
                    >
                      {content["01_primary-action"]}
                    </Button>
                    <Box mt={2}>
                      <Link href="#" color="primary">
                        {content["03_secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardHeader style={{
                    color: "red",
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}}
                    title={content["02_title"]}
                    className={classes.cardHeader}
                  ></CardHeader>
                  <CardContent style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}}
                  >
                    <Box px={1}>
                      <Typography
                        variant="h3"
                        component="h2"
                        style={{ color: "blue" }}
                        gutterBottom={true}
                      >
                        {content["02_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["02_suffix"]}
                        </Typography>
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["02_benefit1"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["02_benefit2"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["02_benefit3"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                        paragraph={true}
                      >
                        {content["02_benefit4"]}
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      {content["02_primary-action"]}
                    </Button>
                    <Box mt={2}>
                      <Link href="#" color="primary">
                        {content["03_secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardHeader style={{
                    color: "red",
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}}
                    title={content["03_title"]}
                    className={classes.cardHeader}
                  ></CardHeader>
                  <CardContent style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'}} 
                  >
                    <Box px={1}>
                      <Typography
                        variant="h3"
                        component="h2"
                        style={{ color: "blue" }}
                        gutterBottom={true}
                      >
                        {content["03_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["03_suffix"]}
                        </Typography>
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["03_benefit1"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["03_benefit2"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {content["03_benefit3"]}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                        paragraph={true}
                      >
                        {content["03_benefit4"]}
                      </Typography>
                    </Box>
                    <Button variant="outlined" color="primary">
                      {content["03_primary-action"]}
                    </Button>
                    <Box mt={2}>
                      <Link href="#" color="primary">
                        {content["03_secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}