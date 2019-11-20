import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TitleFont } from "./style";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 0, 6)
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    "08/2018 - 11/2018 Capstone Project",
    "10/2019 - 01/2020 Monkey King Student Service Center",
    "To be continue"
  ];
}
function getRoleContent(step) {
  switch (step) {
    case 0:
      return "Role: Project leader";
    case 1:
      return "Role: Internship";
    case 2:
      return ``;
    default:
      return "";
  }
}

function getWorkContent(step) {
  switch (step) {
    case 0:
      return `Work Content: Work as a project leader to plan, build, test and debug a bitcoin-related project. \n                       Help to build the constructure and implement important functions include sign up, login, history price visualization, real-time change display and price prediction`;
    case 1:
      return "Work Content: Fix bugs of the company's previous website \n                       Add new pages of events \n                       Update new content of the website \n                       Add database to implement user functions such as sign up, login, subscribe. \n                       Add admin management";
    case 2:
      return ``;
    default:
      return "";
  }
}

export default function Work() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root} id="work">
      <Container>
        <TitleFont>WORK EXPERIENCE</TitleFont>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getRoleContent(index)}</Typography>
                <Typography style={{ whiteSpace: "pre-wrap" }}>
                  {getWorkContent(index)}
                </Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      disabled={activeStep === steps.length - 1}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </div>
  );
}
