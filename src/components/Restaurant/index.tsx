import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'

type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
}

const Restaurant = ({ titulo, avaliacao, descricao, capa, id }: Props) => (
  <S.Card>
    <S.CardImage>
      <img src={capa} alt="Foto do restaurante" />
    </S.CardImage>
    <S.CardInfos>
      <S.CardHeader>
        <h3>{titulo}</h3>
        <div>
          <h3>{avaliacao}</h3>
          <img src={estrela} alt="avaliação" />
        </div>
      </S.CardHeader>
      {/* <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos> */}
      <p>{descricao}</p>
      <S.ButtonLink to={`/profile/${id}`}>Saiba mais</S.ButtonLink>
    </S.CardInfos>
  </S.Card>
)

export default Restaurant