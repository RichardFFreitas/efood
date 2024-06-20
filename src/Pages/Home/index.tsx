import Hero from "../../components/Hero";
import { Container } from "../../components/FoodList/styles";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <FoodList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
