import React from 'react'
import styled from 'styled-components'

function WorkExperience() {
  return (
    <WorkExperienceStyled>
       
       <div className="WE"> <h1>Work Experience</h1></div>
       <div className="c1"> 
        <div className="company"><h6>Tagomo</h6>
        <span className="date"><p>Aug 2022 - Sep 2022</p></span>
        </div>
        
        <div/>
        
           <div className="rd"> 
            <div className="role">Full-stack developer(remote)</div>
                <div className="list">
                  <ul>
                    <li>Helped design websites for clients</li>
                    <li>Improved CSS template design</li>
                    <li>Added Event Listeners to improve UX</li>
                  </ul>
                </div>       
                <div className="description">Wordpress,Javascript, CSS, PHP, CMS
               </div>     
        </div>
        </div>
       

    </WorkExperienceStyled>
  )
}
    const WorkExperienceStyled = styled.section`
            margin-left: 100px;
            margin-bottom: 70px;
       
            .c1{
        display: flex;
        flex-direction: row;
       }
       .role{
        font-style: italic;
       }
       .date{
        font-size: .6em;
       }
       .rd{
        padding-left: 95px;
        line-height: 2;
        color:#232e53;
       }
        .list{
          padding-left: 19px;
          line-height: 2;
          color: #232e53;
        }
       
        
       
        .WE{
        font-size: 1.1rem;
        color: #232e53;
        margin-bottom: 40px;
       }

       .company{
        color: #232e53;
        font-size: 1.6rem;
        padding-bottom: 20px;
        line-height: 2;
       }
      
       .date{
        color: #757D94;
       }
       .description{
        font-style: italic;
       }
`
export default WorkExperience
