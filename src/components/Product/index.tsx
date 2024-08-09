import { useState } from 'react'

import { Modal, ModalContent, ProductCard } from './styles'

import close from '../../assets/images/close.svg'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Product = ({ nome, descricao, porcao, foto, preco }: Props) => {
  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => {
    if (isVisible) {
      return 'isVisible'
    }
    return ''
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <>
      <ProductCard>
        <img src={foto} alt="Foto do restaurante" />
        <h2>{nome}</h2>
        <p>{getDescription(descricao)}</p>
        <button onClick={() => setIsVisible(true)}>Adicione ao carrinho</button>
      </ProductCard>
      <Modal className={showModal()}>
        <ModalContent>
          <div>
            <img src={foto} alt="Foto do prato" />
            <div>
              <div>
                <h2>{nome}</h2>
                <img
                  src={close}
                  onClick={() => setIsVisible(false)}
                  alt="Clique para fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Porção: {porcao}</p>
              <button>{`Adicionar ao carrinho - ${formataPreco(
                preco
              )}`}</button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Product