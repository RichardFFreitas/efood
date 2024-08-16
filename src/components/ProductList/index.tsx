import { Cardapio } from '../../Pages/Home'
import Product from '../Product'
import { ProductListStyle } from './styles'
type Props = {
  produtos: Cardapio[]
}
const ProductList = ({ produtos }: Props) => (
  <ProductListStyle>
      {produtos.map((produto) => (
        <Product
          key={produto.id}
          id={produto.id}
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