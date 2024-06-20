import styled from "styled-components";
import { colors } from "../../styles";

export const FooterBackground = styled.footer`
background-color: ${colors.peach};
max-width: 100%;
height: 348px;
`

export const Container = styled.div`
max-width: 480px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 40px;
`

export const SocialMidia = styled.div`
display: flex;
padding-top: 32.5px;

a {
    margin:  8px;
}

img {
    width: 28px;
    height: 28px;
}
`

export const Paragrafo = styled.p`
text-align: center;
margin-top: 80px;
padding-bottom: 40px;
`