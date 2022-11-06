import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Description from './Description';
import WorkExperience from './WorkExperience';

function Card() {
  return (
    <CardStyled>
      <Header/>
      <Description/>
      <WorkExperience/>
    </CardStyled>
  )
}
    const CardStyled = styled.div`
     position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1000px;
  background: #F0F3F5;
  margin-top: 70px;
    `;

export default Card