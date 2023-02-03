import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    Rating: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "red",
        },
      },
    },
  },
});

export default function BasicRating(props) {
  const [value, setValue] = React.useState();

  React.useEffect(
    ()=>{
      setValue(props.rate)
    }, [props.rate]
  )
    
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >{value}
        <Rating size="large" name="read-only" value={value} readOnly />
      </Box>
    </ThemeProvider>
  );
}
