import React from 'react'
import styled from 'styled-components'

function Education() {
  return (
        <EducationStyled>
          
    <div className="Ed">
        <h1>Education</h1>
    </div>
        <div className="cont"> 
            <div className="Uni">
                <h6>Kolegji UBT</h6>
            </div>
            <div className="direction">
                <p>Computer Science</p>
            </div>
            </div>
        <div className="date">
            <p>2018/2019 - Present</p>
        </div>
        </EducationStyled>
  )
}
    const EducationStyled = styled.section`
        margin-left: 100px;
        margin-bottom: 70px;
        
    .cont{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
        .Ed{
            font-size: 1.1rem;
        font-weight: 400;
        color: #232e53;
        margin-bottom: 40px;

        }
        .Uni{
        color: #232e53;
        font-size: 1.6rem;
        padding-bottom: 20px;
       }
       .date{
        color: #757D94;
       }
       .direction{
        font-size: 1rem;
        color: #232e53;
        font-style: italic;
        padding-left: 140px;
       
       }
    `
export default Education