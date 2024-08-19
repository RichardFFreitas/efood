import { useParams } from 'react-router-dom'

import { useGetRestaurantSelectedQuery } from '../../services/api'

import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../components/ProductList'

const Profile = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetRestaurantSelectedQuery(id!)

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