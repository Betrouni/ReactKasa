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
  paddingBottom: '25px',
  width: "90vw",
  margin: 'auto',

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

  borderRadius: "10px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#F7F7F7",
  color: "#FF6060",
  paddingBottom: "50px",
  paddingTop: "25px",
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [equipement, setEquipement] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    if (props.hasOwnProperty("content")) {
      let a = props["content"];

      if (Array.isArray(a)) {
        setEquipement(props["content"]);
      }
    }
  }, [props]);

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
            <Typography component={"span"}>{props.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              {props.description ? (
                <p> {props.description} </p>
              ) : (
                equipement?.map((i, index) => <p key={index}> {i} </p>)
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
      </ThemeProvider>
    </div>
  );
}
