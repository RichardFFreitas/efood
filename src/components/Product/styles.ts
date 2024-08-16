import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.peach};
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 170px;
    object-fit: cover;
  }

  h2 {
    margin: 8px;
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${colors.peach};
  }

  button {
    color: ${colors.pink};
    background-color: ${colors.peach};
    border: none;
    font-weight: 700;
    font-size: 14px;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 16px;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  display: none;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  z-index: 1;

  > div {
    display: flex;
    padding: 0 0 32px 32px;
    background-color: ${colors.pink};
    color: ${colors.peach};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
      margin-top: 32px;
    }

    div {
      display: block;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 21px;
          font-weight: 900;
          margin-top: 32px;
        }

        img {
          height: 16px;
          width: 16px;
          margin: 8px;
          cursor: pointer;
        }
      }

      p {
        margin: 16px 0;
        font-size: 14px;
      }
      
      button {
        border: none;
        padding: 4px 7px;
        font-size: 14px;
        font-weight: 700;
        background-color: ${colors.peach};
        color: ${colors.pink};
        cursor: pointer;
      }
    }
  }
`	