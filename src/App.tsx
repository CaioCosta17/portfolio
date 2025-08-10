import Sidebar from './containers/Sidebar'
import Sobre from './containers/sobre'
import Projetos from './containers/Projetos'
import EestiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EestiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
