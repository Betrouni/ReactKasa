import React from "react";
// import Tag from "./Tag";
import styled from "styled-components";
// import UserPic from "./UserPic.jsx";
// import Rate from "./Rate.jsx";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const StyledTag = styled.div`
  width: fit-content;
  background-color: #ff6060;

  padding-left: 25px;
  padding-right: 25px;
  border-radius: 10px;
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 4px;
  padding-top: 2px;
  margin-top: 25px;
  margin-right: 20px;
  @media (max-width: 768px) {
  
      font-size: 10px;

  }
`;
const TopDescription = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    .left {
      width: 100%;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
    .right {
      width: 95%;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;

const LeftDescription = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ff6060;
  width: 70%;
`;
const RightDescription = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

const TopRight = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ff6060;

  display: flex;
  justify-content: flex-end;
`;

const BotRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

const TagContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100vw;

  font-size: 10px;

}
`;

const themeRate = createTheme({
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

const UserPicture = styled.div`
  height: 100px;
  width: 100px;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;

function splitWords(str) {
  return str.split(" ");
}

export default function Description(props) {
  const { logement } = props;
  const [name, setName] = React.useState();
  const [familyName, setfamilyName] = React.useState();
  const [picture, setPicture] = React.useState();

  React.useEffect(() => {
    if (logement.hasOwnProperty("host")) {
      let a = splitWords(logement.host.name);

      setName(a[0]);
      setfamilyName(a[1]);
      setPicture(logement.host.picture);
    }
  }, [logement]);

  return (
    <div>
      <TopDescription>
        <LeftDescription className="left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <TagContainer>
            {logement.tags?.map((i, index) => (
              <StyledTag key={index}>
                {i}
              </StyledTag>
            ))}
          </TagContainer>
        </LeftDescription>
        <RightDescription className="right">
          <TopRight>
            {logement.host ? (
              <div className="nom">
                <p>
                  {name} <br></br>
                  {familyName}{" "}
                </p>
              </div>
            ) : (
              console.log("name loading")
            )}

            <UserPicture>
              <img alt="propriétaire" src={picture}></img>
            </UserPicture>
          </TopRight>
          <BotRight>
            {logement.rating && (
              <ThemeProvider theme={themeRate}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    size="large"
                    name="read-only"
                    value={parseInt(logement.rating)}
                    readOnly
                  />
                </Box>
              </ThemeProvider>
            )}
          </BotRight>
        </RightDescription>
      </TopDescription>
    </div>
  );
}
