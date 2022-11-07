import React from 'react'
import styled from 'styled-components'

function WorkExperience() {
  return (
    <WorkExperienceStyled>
       
       <div className="WE"> <h1>Work Experience</h1></div>
       <div className="c1"> 
        <div className="company"><h6>Tagomo</h6></div>
        <div className="date"><p>Aug 2022 - Sep 2022</p></div>
        <div className=""></div>
        </div>

    </WorkExperienceStyled>
  )
}
    const WorkExperienceStyled = styled.section`
        margin-left: 100px;
        margin-bottom: 70px;
       .WE{
        font-size: 1.1rem;
        color: #232e53;
        margin-bottom: 40px;
       }

       .company{
        color: #232e53;
        font-size: 1.6rem;
        padding-bottom: 20px;
       }
       .date{
        color: #757D94;
       }
    `;

export default WorkExperience