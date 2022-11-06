import React from 'react'
import styled from 'styled-components'

function Description() {
  return (
    <DescriptionStyled>
        <div className="dscp"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel corporis esse laboriosam quas facilis amet odit</p>
</div>
    <div className="info">
        <p>Front-End Developer | Prishtine, Kosovo | rrezonistrefaj@protonmail.com | +38344120869</p> </div>
    </DescriptionStyled>
  )
}
    const DescriptionStyled = styled.div`
   margin-bottom: 50px;
   .dscp{
  color: #232e53;
    font-size: 1.3em;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
    }
    .info{
        font-size: 1em;
        margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 10px;
  color:  #757D94;
  
    }
    `;
export default Description