import Food from "../Food";
import FoodModal from "../../models/Food";
import { Container, List } from "./styles";

const foods: FoodModal[] = [
  {id: 1, foodTitle: "Hioki Sushi ", foodPhoto: "sushi.png", foodDescription: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",  foodPhotoAlt: "Sushi", },
  {id: 2, foodTitle: "La Dolce Vita Trattoria", foodPhoto: "Pasta.png", foodDescription: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",  foodPhotoAlt: "Pasta", },
  {id: 3, foodTitle: "La Dolce Vita Trattoria", foodPhoto: "Pasta.png", foodDescription: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",  foodPhotoAlt: "Pasta", },
  {id: 4, foodTitle: "La Dolce Vita Trattoria", foodPhoto: "Pasta.png", foodDescription: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",  foodPhotoAlt: "Pasta", },
  {id: 5, foodTitle: "La Dolce Vita Trattoria", foodPhoto: "Pasta.png", foodDescription: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",  foodPhotoAlt: "Pasta", },
]


const FoodList = () => (
  <Container>
    <List>
      {foods.map(
        ({ id, foodPhoto, foodTitle, foodDescription, foodPhotoAlt }) => (
          <li key={id}>
            <Food
              FoodPhoto={foodPhoto}
              FoodTitle={foodTitle}
              FoodDescription={foodDescription}
              FoodPhotoAlt={foodPhotoAlt}
            />
          </li>
        )
      )}
    </List>
  </Container>
);

export default FoodList;
