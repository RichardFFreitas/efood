import { Cabecalho, CabecalhoImg, HomeLink, Logo } from './styles'

import logo from '/logo.png'
import bgImg from '/HeroBG.png'
import dolceVita from '../../assets/images/DolceVita.svg'
import Footer from '../Footer'
import ProductList from '../ProductList'

const RestaurantProfile = () => (
  <>
    <Cabecalho style={{ backgroundImage: `url(${bgImg})` }}>
      <div>
        <HomeLink to={'/'}>Restaurantes</HomeLink>
        <Logo src={logo} alt="efood" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </Cabecalho>
    <CabecalhoImg style={{ backgroundImage: `url(${dolceVita})` }}>
      <h1>Italiana</h1>
      <h1>La Dolce Vita Trattoria</h1>
    </CabecalhoImg>
    <ProductList />
    <Footer />
  </>
)

export default RestaurantProfile