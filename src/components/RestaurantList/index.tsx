import { Restaurante } from '../../Pages/Home'
import Restaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <List>
      {restaurantes.map((restaurante) => (
        <Restaurant
          key={restaurante.id}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
          id={restaurante.id}
        />
      ))}
    </List>
  )
}             

export default RestaurantList