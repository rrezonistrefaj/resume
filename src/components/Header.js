 import { StyledHeader } from "./styles/Header.styled"
 import { Container } from "./styles/Container.styled"
 export default function Header() {
    return(    
            <StyledHeader>
                <Container>
                <h1>Rrezon</h1>
                <h1>Istrefaj</h1>
                
                <img src = "https://pbs.twimg.com/profile_images/1572307978400792577/MTSO0kTv_400x400.jpg" alt = "pfp"></img>
                <div className="txt">Full-Stack Engineer with 5+ years of experience turning ideas into reality, from creating MVPs to developing high-end products and services.
</div>
                </Container>
            </StyledHeader>
    )
 }