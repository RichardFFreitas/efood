import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.pink};
  max-width: 472px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.pink};
`;

export const Photo = styled.img`
  margin-bottom: 8px;
`;

export const Title = styled.h3`
font-size: 16px;
font-weight: 900;
margin: 0 8px;
`

export const Description = styled.div`
  font-size: 14px;
  margin: 8px 8px;
`;

export const Button = styled.button`
  background-color: ${colors.pink};
  width: 82px;
  height: 24px;
  color: ${colors.peach};
  border: none;
  padding: 4px 0;
  margin: 8px;
  font-weight: bold;
` 