import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.jpeg';

function Header() {
  return (
    <HeaderStyled>
        <div className = "header-name">
        <h1>Rrezon</h1>
        <br/>
        <h1>Istrefaj</h1>        
        </div>
        <div className="header-avatar">
        <img src={avatar} alt=''></img>
        </div>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.section`
 position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .header-name{
  color: #232e53;
  line-height: 0.5;
  font-size: 2em;
  margin-top: 90px;
  margin-left: 100px;
  margin-bottom: 30px;
  }
  .header-avatar{
    position: relative ;
  width:130px ;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 100px;
  margin-top: 70px;
  }
  .header-avatar img{
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`;
export default Header