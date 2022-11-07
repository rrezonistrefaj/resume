import React from 'react'
import styled from 'styled-components';

function Skills() {
  return (
    <SkillsStyled>
        <div className="cont">
        <div className="SK"><h1>Skills</h1></div>
        <div className="SKitems">
            <ul>
                <li className="React">React</li>
                <li className="ReactNative">React Native</li>
                <li className="HTMLCSS">HTML/CSS</li>
                <li className="Javascript">Javascript</li>
                <li className="Python">Python</li>
                <li className="Java">Java</li>
            </ul>
            </div>
        </div>
        </SkillsStyled>
  )
}
    const SkillsStyled = styled.section`
    margin-left: 100px;
    margin-bottom: 70px;
   
    .cont{
        display: flex;
    flex-direction: row;
    }
    .SK{
        color: #232e53;
        font-size: 1.1rem;
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
    }
    .SKitems{
      
        padding-left: 170px;

    
    }
    .React{
       
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    .ReactNative{
        box-sizing: border-box;
    margin: 0;
    min-width: 0;
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    .HTMLCSS{
        box-sizing: border-box;
    margin: 0;
    min-width: 0;
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    .Javascript{
        box-sizing: border-box;
    margin: 0;
    min-width: 0;
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    .Python{
        box-sizing: border-box;
    margin: 0;
    min-width: 0;
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    .Java{
        box-sizing: border-box;
    margin: 0;
    min-width: 0;
    line-height: 1.6;
    color: #232e53;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #b8adfb;
    margin-right: 24px;
    margin-bottom: 12px;
    }
    `;
export default Skills