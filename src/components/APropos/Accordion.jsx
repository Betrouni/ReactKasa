import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // paddingRight: '40px',
  width: "70vw",
  margin: "auto",
  paddingBottom: '25px',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#FF6060" : "#FF6060",
  zIndex: "2",

  color: "white",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",

  borderRadius: "5px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  color: "#FF6060",

  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#F7F7F7",
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion
          expanded={expanded === true}
          onChange={handleChange(!expanded)}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>{props.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'}>
              {props.description}
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
      </ThemeProvider>
    </div>
  );
}
