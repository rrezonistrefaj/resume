 import { StyledHeader, Nav ,Logo } from "./styles/Header.styled"
 import { Container } from "./styles/Container.styled"
 export default function Header() {
    return(    
            <StyledHeader>
                <Container>
            
                <Nav>
                <Logo>
                    <h4>Rrezon</h4>
                    <h4>Istrefaj</h4>
                    </Logo>
                <img src = "https://pbs.twimg.com/profile_images/1572307978400792577/MTSO0kTv_400x400.jpg" alt = "pfp"></img>

                </Nav>
               
                </Container>
            
            </StyledHeader>
    )
 }