import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../components/ProductList'

const Profile = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestaurantQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderProfile restaurante={restaurante} />
      <ProductList produtos={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Profile