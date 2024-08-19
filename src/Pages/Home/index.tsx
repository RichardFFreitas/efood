import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'
import { useGetRestaurantsQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { isLoading, error, data: restaurantes } = useGetRestaurantsQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os restaurantes.</p>
  }

  return (
    <>
      <HeaderHome />
      {restaurantes && <RestaurantList restaurantes={restaurantes} />}
      <Footer />
    </>
  )
}

export default Home