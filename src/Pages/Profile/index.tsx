import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import { Restaurante } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // Verifica se a resposta é uma array, se não, converte para uma array com um único elemento
        if (!Array.isArray(res)) {
          res = [res]
        }

        setRestaurante(res[0]) // Define o primeiro restaurante retornado pela API
      })
  }, [id])

  if (!restaurante) {
    return (
      <h3>Carregando...</h3>
    ) 
  }

  return (
    <>
      <HeaderProfile restaurante={restaurante} />
      <ProductList restaurante={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Profile