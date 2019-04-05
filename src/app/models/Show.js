class Show {
    constructor(id, name, image, rating) {
        this.id = id;
        this.name = name;
        this.imageMedium = image.medium;
        this.imageOriginal = image.original;
        this.rating = rating;
    }
}

export default Show