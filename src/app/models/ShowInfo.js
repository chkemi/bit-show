class ShowInfo {
    constructor(id, name, image, summary, embedded) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.summary = summary;
        this.seasons = embedded.seasons;
        this.cast = embedded.cast;
    }
}

export default ShowInfo