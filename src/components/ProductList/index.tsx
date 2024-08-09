import { Cardapio } from '../../Pages/Home'
import Product from '../Product'
import { ProductListStyle } from './styles'
type Props = {
  restaurante: Cardapio[]
}
const ProductList = ({ restaurante }: Props) => (
  <ProductListStyle>
      {restaurante.map((produto) => (
        <Product
          key={produto.id}
          descricao={produto.descricao}
          nome={produto.nome}
          foto={produto.foto}
          porcao={produto.porcao}
          preco={produto.preco}
        />
      ))}
    </ProductListStyle>
)

export default ProductList