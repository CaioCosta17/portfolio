import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'
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
