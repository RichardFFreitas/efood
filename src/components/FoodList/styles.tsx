import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  li {
    list-style: none;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 32px;
`;
