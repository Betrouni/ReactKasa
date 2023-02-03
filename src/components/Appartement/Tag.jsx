import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
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
`;

export default function Tag(props) {
  return <StyledBanner>{props.tag}</StyledBanner>;
}
