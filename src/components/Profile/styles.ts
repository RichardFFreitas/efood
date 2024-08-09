import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const Cabecalho = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
  div {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 125px;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
`

export const CabecalhoImg = styled.div`
  height: 280px;
  padding: 24px 170px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  h1:first-child {
    font-weight: 100;
    color: ${colors.white};
  }
  h1:nth-child(2) {
    font-weight: 900;
    color: ${colors.white};
  }
`