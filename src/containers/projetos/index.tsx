import styled from 'styled-components'

import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Li = styled.li`
  list-style: none;
`

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
      <Li>
        <Projeto />
      </Li>
    </Lista>
  </section>
)

export default Projetos
