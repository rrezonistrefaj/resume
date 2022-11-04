
import Header from './components/Header';
import{Container}from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import './App.css';
import content from './content'
import Card from '/components/Card';




function App() {
  return (
  
    <>
    <GlobalStyles/>
    <Header/>
    
    <Container>
    <h5>Full-Stack Engineer with 5+ years of experience turning ideas into reality, from creating MVPs to developing high-end products and services.
</h5>
    {content.map((item,index) =>(
      <p>{item.title}</p>
    ))}
    </Container>

    </>


  )
}

export default App;
