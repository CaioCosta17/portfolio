import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Caio Costa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        caiocosta17
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engeinheiro Full-Stack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
