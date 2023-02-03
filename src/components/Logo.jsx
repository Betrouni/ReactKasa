import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/images/logo_kasa.svg'


const StyledImg = styled.img`
width: 150px;
@media (max-width: 450px) {
  width: 100px;

  }`


export default function Logo() {
  return (
    <>
      <NavLink className='navbar-brand' to="/Home">
        <StyledImg src={logo} alt="Logo Kasa" />
      </NavLink>
    </>
  );
};

