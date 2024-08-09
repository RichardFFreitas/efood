import estrela from '../../assets/images/estrela.svg'

import Tag from '../Tag'
import { ButtonLink, Card, CardHeader, CardImage, CardInfos } from './styles'
type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
}

const Restaurant = ({ titulo, avaliacao, descricao, capa, id}: Props) => (
  <Card>
    <CardImage>
      <img src={capa} alt="Foto do restaurante" />
    </CardImage>
    <CardInfos>
      <CardHeader>
        <h3>{titulo}</h3>
        <div>
          <h3>{avaliacao}</h3>
          <img src={estrela} alt="avaliação" />
        </div>
      </CardHeader>
      {/* <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos> */}
      <p>{descricao}</p>
      <ButtonLink to={`/profile/${id}`}>Saiba mais</ButtonLink>
    </CardInfos>
  </Card>
)

export default Restaurant