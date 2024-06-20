class Food {
    id: number
    foodTitle: string
    foodPhoto: string
    foodDescription: string
    foodPhotoAlt: string

    constructor(
        id: number,
        foodTitle: string,
        foodPhoto: string,
        foodDescription: string,
        foodPhotoAlt: string
    ) {
        this.id = id
        this.foodTitle = foodTitle
        this.foodPhoto = foodPhoto
        this.foodDescription = foodDescription
        this.foodPhotoAlt = foodPhotoAlt
    }
}

export default Food