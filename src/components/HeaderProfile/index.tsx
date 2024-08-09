import { Cabecalho, CabecalhoImg, HomeLink, Logo } from './styles'

import bgImg from '/HeroBG.png'
import logo from '/logo.png'
import { Restaurante } from '../../Pages/Home'

type Props = {
  restaurante: Restaurante
}

const HeaderProfile = ({ restaurante }: Props) => (
  <>
    <Cabecalho style={{ backgroundImage: `url(${bgImg})` }}>
      <div>
        <HomeLink to={'/'}>Restaurantes</HomeLink>
        <Logo src={logo} alt="efood" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </Cabecalho>
    <CabecalhoImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div>
        <h1>{restaurante.tipo}</h1>
        <h1>{restaurante.titulo}</h1>
      </div>
    </CabecalhoImg>
  </>
)

export default HeaderProfile