import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import{Container}from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import './App.css';


const theme = {
  colors:{
    header: '#ebeffe',
    body: 'fff',
    footer: '003333',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
    <Container>
        <h5>Full-Stack Engineer with 5+ years of experience turning ideas into reality, from creating MVPs to developing high-end products and services.
</h5>
    </Container>
    </>
    </ThemeProvider>
  )
}

export default App;
