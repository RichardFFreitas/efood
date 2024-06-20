import styled from "styled-components";
import Hero from "/HeroBG.png";
import { colors } from "../../styles";

export const HeroContainer = styled.div`
  background-image: url(${Hero});
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  
  h1 {
    width: 700px;
    height: 84px;
    text-align: center;
    color: ${colors.pink};
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    margin-top: 136px;
  }
`;
