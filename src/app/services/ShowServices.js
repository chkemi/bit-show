import Show from "../models/Show";

const fetchShows = () => {
    return fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(showsArr => showsArr.slice(0, 50).map(show => new Show(show.id, show.name, show.image, show.rating.average)))
}

const fetchSearchedShows = (value) => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(showsArr => showsArr.slice(0, 10)
            .filter((show) => show.show.image)
            .map(show => new Show(show.show.id, show.show.name, show.show.image, show.show.rating.average)))
}

export {
    fetchShows,
    fetchSearchedShows,
}