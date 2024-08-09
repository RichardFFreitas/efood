import  { Container, GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App