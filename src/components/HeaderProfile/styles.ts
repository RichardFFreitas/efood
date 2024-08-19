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
    justify-content: space-between;
    align-items: center;

    p {
      cursor: pointer;
    }
  }
`

export const Logo = styled.img`
  width: 125px;
`
export const HomeLink = styled(Link)`
  text-decoration: none;
  
  &:visited {
    color: ${colors.pink};
  }
`

export const CabecalhoImg = styled.div`
  height: 280px;
  padding: 24px 170px 32px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  &::after {
    position: absolute;
    width: 100%;
    height: 280px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1:first-child {
      font-weight: 100;
      color: ${colors.white};
      z-index: 1;
    }

    h1:nth-child(2) {
      font-weight: 900;
      color: ${colors.white};
      z-index: 1;
    }
  }
`