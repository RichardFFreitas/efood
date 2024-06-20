import { FooterBackground, Paragrafo, SocialMidia } from "./style";
import { Container } from "./style";

const Footer = () => {
  return (
    <FooterBackground>
      <Container>
        <img src="/logo.png" alt="Logo" />
        <SocialMidia>
          <a href="https://www.instagram.com">
            <img src="/Vetores/instagram.png" alt="Logo Instagram" />
          </a>
          <a href="https://www.facebook.com">
            <img src="/Vetores/facebook.png" alt="Logo Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="/Vetores/Twitter.png" alt="Logo Twitter" />
          </a>
        </SocialMidia>
        <Paragrafo>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Paragrafo>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
