import { Card, Photo, Title, Description, Button } from "./styles";

export type Props = {
    FoodPhoto: string,
    FoodTitle: string,
    FoodDescription: string,
    FoodPhotoAlt: string
}

const Food = ({FoodPhoto, FoodTitle, FoodDescription, FoodPhotoAlt}: Props) => (
    <Card>
        <Photo src={FoodPhoto} alt={FoodPhotoAlt} />
        <Title>{FoodTitle}</Title>
        <Description>{FoodDescription}</Description>
        <Button>Adicionar</Button>
    </Card>
)

export default Food