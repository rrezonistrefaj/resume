import React from 'react'
import styled from 'styled-components';

function Projects() {
  return (
    <ProjectsStyled>
       <div className="Projects"> <h1>Projects</h1></div>
       <div className="c1"> 
        <div className="animeweb"><a href="https://github.com/rrezonistrefaj/animeweb"><h6>animeweb</h6></a>
        <span className="date"><p>Aug 2022 - Sep 2022</p></span>
        </div>
        
        <div/>
        
           <div className="rd"> 
            <div className="role">Full-stack developer</div>
              <div className="description">Animeweb is a beautifully designed website for watching anime for free with no adds
               </div>
                <div className="list">
                  <ul>
                    <li>Helped design the website</li>
                    <li>Developed skip feature and next episode</li>
                    <li>Updated anime content</li>
                  </ul>
                </div>
                
              
              
            
        </div>
        </div>
       
    </ProjectsStyled>
  )
}
    const ProjectsStyled = styled.section`
            margin-left: 100px;
       
       .c1{
        display: flex;
        flex-direction: row;
       }
       .role{
        font-style: italic;
       }
       .animeweb{
       line-height: 2.5;
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
       
        
       
        .Projects{
        font-size: 1.1rem;
        color: #232e53;
        margin-bottom: 40px;
       }

       .animeweb{
        color: #232e53;
        font-size: 1.6rem;
        padding-bottom: 20px;
       }
       .animeweb a{
        color: #232e53;
        text-decoration: none;
       }
       .date{
        color: #757D94;
       }
       a:hover {color: #757D94}
    `;
export default Projects