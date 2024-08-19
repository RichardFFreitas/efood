import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

type InputProps = {
  maxWidth?: string
}

type InputGroupProps = {
  maxWidth?: string
}

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
  color: ${colors.white2};

  &.is-open {
    display: flex;
  }
`
export const CartMenu = styled.div`
  margin-bottom: 20px;
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
  border: none;
  cursor: pointer;
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
  background-color: ${colors.peach};
  margin-bottom: 8px;
  font-weight: 700;
  padding: 4px;
  cursor: pointer;
`
export const CartButtonLink = styled(Link)`
  max-width: 100%;
  width: 100%;
  border: none;
  color: ${colors.pink};
  background-color: ${colors.peach};
  font-weight: 700;
  padding: 4px;
  margin-bottom: 8px;
  text-decoration: none;
  cursor: pointer;
`
export const DeliveryMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  > div {
    margin-bottom: 24px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const PaymentMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  > div {
    margin-bottom: 24px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const ConfirmationMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 22px;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
  label {
    margin-bottom: 8px;
  }
  input {
    background-color: ${colors.peach};
    color: ${colors.input};
    border: none;
    height: 32px;
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    &.error {
      border: 2px solid red;
    }
  }
`

export const Input = styled.input<InputProps>`
  background-color: ${colors.peach};
  color: ${colors.input};
  border: none;
  height: 32px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  &.error {
    border: 2px solid red;
  }
`