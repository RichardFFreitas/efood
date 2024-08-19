import { useFormik } from 'formik'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { formataPreco } from '../Product'
import * as S from './styles'

import removeImg from '../../assets/images/remove.svg'
import { usePurchaseMutation } from '../../services/api'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [menu, setMenu] = useState('cart')
  const [paymentMenu, setPaymentMenu] = useState(false)

  const dispatch = useDispatch()

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 letras')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 8 números')
        .max(9, 'O CEP precisa ter 8 números')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            number: Number(values.number),
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 99
          }
        ]
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => acc + curr.preco, 0)
  }

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPaymentMenu = () => {
    if (
      form.values.receiver &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      setMenu('payment')
      setPaymentMenu(true)
    } else {
      alert('Preencha os campos obrigatórios')
    }
  }

  console.log(form)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.CartStyle>
        {isSuccess ? (
          <S.ConfirmationMenu>
            <>
              <h3>Pedido realizado - {data?.orderId || 'ORDER_ID'}</h3>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
            <S.CartButton>
              <S.CartButtonLink to={'/'} onClick={closeCart}>
                Concluir
              </S.CartButtonLink>
            </S.CartButton>
          </S.ConfirmationMenu>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {menu === 'cart' && (
              <S.CartMenu>
                <ul>
                  {items.map((produto) => {
                    return (
                      <li key={produto.id}>
                        <S.Foto src={produto.foto} alt={produto.nome} />
                        <div>
                          <h3>{produto.nome}</h3>
                          <p>{formataPreco(produto.preco)}</p>
                        </div>
                        <S.RemoveButton
                          onClick={() => removeProduct(produto.id)}
                        >
                          <img
                            src={removeImg}
                            alt="Clique aqui para remover o produto do carrinho"
                          />
                        </S.RemoveButton>
                      </li>
                    )
                  })}
                </ul>
                <S.Total>
                  <p>Valor</p>
                  <p>{formataPreco(getTotalPrice())}</p>
                </S.Total>
                <S.CartButton
                  type="button"
                  onClick={() => {
                    if (items.length > 0) {
                      setMenu('delivery')
                    } else {
                      alert('Adicione produtos para prosseguir com a compra')
                    }
                  }}
                >
                  Continuar com a entrega
                </S.CartButton>
              </S.CartMenu>
            )}
            {menu === 'delivery' && (
              <S.DeliveryMenu>
                <h3>Entrega</h3>
                <div>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <S.Input
                      maxWidth="344px"
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError('receiver') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <S.Input
                      maxWidth="344px"
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <S.Input
                      maxWidth="344px"
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        mask="99999-999"
                        name="zipCode"
                        type="text"
                        value={form.values.zipCode}
                        id="zipCode"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('zipCode') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="number">Número</label>
                      <input
                        name="number"
                        type="text"
                        value={form.values.number}
                        id="number"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('number') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </div>
                  <S.InputGroup maxWidth="344px">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      className={getError('complement') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <S.CartButton
                  type="submit"
                  onClick={() => {
                    goToPaymentMenu()
                  }}
                >
                  Continuar com o pagamento
                </S.CartButton>
                <S.CartButton
                  type="button"
                  onClick={() => {
                    setMenu('cart')
                  }}
                >
                  Voltar para o carrinho
                </S.CartButton>
              </S.DeliveryMenu>
            )}
            {menu === 'payment' && (
              <S.PaymentMenu>
                <h3>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </h3>
                <div>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <S.Input
                      maxWidth="344px"
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError('cardName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div>
                    <S.InputGroup
                      style={{ marginRight: '30px' }}
                      maxWidth="228px"
                    >
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        mask="9999 9999 9999 9999"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('cardNumber') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        mask="999"
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('cardCode') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </div>
                  <div>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <InputMask
                        mask="99"
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('expiresMonth') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <InputMask
                        mask="99"
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('expiresYear') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </div>
                </div>
                <S.CartButton
                  type="submit"
                  onClick={() => {
                    form.handleSubmit()
                  }}
                >
                  Finalizar pagamento
                </S.CartButton>
                <S.CartButton
                  type="button"
                  onClick={() => {
                    setMenu('delivery')
                  }}
                >
                  Voltar para a edição de endereço
                </S.CartButton>
              </S.PaymentMenu>
            )}
          </form>
        )}
      </S.CartStyle>
    </S.CartContainer>
  )
}

export default Cart