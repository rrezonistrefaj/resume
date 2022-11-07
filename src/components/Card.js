import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Description from './Description';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

function Card() {
  return (
    <CardStyled>
      <Header/>
      <Description/>
      <WorkExperience/>
      <Education/>
      <Skills/>
      <Projects/>
    </CardStyled>
  )
}
    const CardStyled = styled.div`
     position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1200px;
  background: #F0F3F5;
  margin-top: 70px;
  margin-bottom: 70px;
    `;

export default Card