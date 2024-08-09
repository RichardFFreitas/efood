class RestaurantModel {
    name: string
    rating: string
    description: string
    infos: string[]
    image: string
    id: number
  
    constructor(
      name: string,
      rating: string,
      description: string,
      infos: string[],
      image: string,
      id: number
    ) {
      this.name = name
      this.rating = rating
      this.description = description
      this.infos = infos
      this.image = image
      this.id = id
    }
  }
  
  export default RestaurantModel