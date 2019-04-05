import React, { Component } from 'react';
import { fetchShows, fetchSearchedShows } from '../../services/ShowServices';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            searchedShows: [],
            searchValue: ''
        }

        this.changeSearchValue = this.changeSearchValue.bind(this);
    }

    componentDidMount() {
        fetchShows()
            .then((shows) => {
                this.setState({
                    shows
                })
            })
    }

    renderShows() {
        return this.state.shows.map((show) => {
            return (
                <Link key={show.id} to={`/show/${show.id}`}>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={show.imageMedium} alt='Show' />
                            </div>
                            <div className="card-content center">
                                <h5><b>{show.name}</b></h5>
                                <p>Rating: <b>{show.rating}</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    renderSearchedShows() {
        return this.state.searchedShows.map((show) => {
            return (
                <Link key={show.id} to={`/show/${show.id}`}>
                    <li>{show.name}</li>
                </Link>
            )
        })
    }

    changeSearchValue(e) {
        this.setState({
            searchValue: e.target.value
        })

        fetchSearchedShows(e.target.value)
            .then((shows) => {
                this.setState({
                    searchedShows: shows
                })
            })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search show' value={this.state.searchValue} onChange={this.changeSearchValue} />
                    </div>
                </form>
                <ul>
                    {this.renderSearchedShows()}
                </ul>
                <h2 className='center'>Popular Shows</h2>
                <div className="row">
                    {this.renderShows()}
                </div>
            </div>
        );
    }
}

export default LandingPage;