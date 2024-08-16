import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  font-size: 14px;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartStyle = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.pink};
  padding: 32px 8px;
  z-index: 1;

  ul {
    li {
      position: relative;
      display: flex;
      padding: 8px;
      background-color: ${colors.peach};
      color: ${colors.pink};
      margin-bottom: 16px;

      h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
      }
    }
  }
`

export const Foto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`
export const RemoveButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  bottom: 8px;
`
export const Total = styled.div`
  color: ${colors.peach};
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`
export const CartButton = styled.button`
  width: 100%;
  border: none;
  color: ${colors.pink};
  font-weight: 700;
  padding: 4px;
`