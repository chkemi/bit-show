import Show from "../models/Show";
import ShowInfo from "../models/ShowInfo";

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

const fetchSingleShow = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(response => response.json())
        .then(infoArr => new ShowInfo(infoArr.id, infoArr.name, infoArr.image.original, infoArr.summary, infoArr._embedded))
}

export {
    fetchShows,
    fetchSearchedShows,
    fetchSingleShow,
}