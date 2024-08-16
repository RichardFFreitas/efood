import { useDispatch, useSelector } from 'react-redux'
import {
  CartButton,
  CartContainer,
  CartStyle,
  Foto,
  Overlay,
  RemoveButton,
  Total
} from './styles'
import { RootReducer } from '../../store'
import { formataPreco } from '../Product'

import removeImg from '../../assets/images/remove.svg'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <CartStyle>
        <ul>
          {items.map((produto) => {
            return (
              <li key={produto.id}>
                <Foto src={produto.foto} alt={produto.nome} />
                <div>
                  <h3>{produto.nome}</h3>
                  <p>{formataPreco(produto.preco)}</p>
                </div>
                <RemoveButton onClick={() => removeProduct(produto.id)}>
                  <img
                    src={removeImg}
                    alt="Clique aqui para remover o produto do carrinho"
                  />
                </RemoveButton>
              </li>
            )
          })}
        </ul>
        <Total>
          <p>Valor Total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Total>
        <CartButton>Continuar com a entrega</CartButton>
      </CartStyle>
    </CartContainer>
  )
}

export default Cart