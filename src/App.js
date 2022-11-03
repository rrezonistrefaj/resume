import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import{Container}from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';

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
        <p>p</p>
    </Container>
    </>
    </ThemeProvider>
  )
}

export default App;
