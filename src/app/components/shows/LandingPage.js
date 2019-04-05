import React, { Component } from 'react';
import { fetchShows, fetchSearchedShows } from '../../services/ShowServices';

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
                <div key={show.id} className="col s4">
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
            )
        })
    }

    renderSearchedShows() {
        return this.state.searchedShows.map((show) => {
            return (
                <li>{show.name}</li>
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
                <h2 className='center'>Popular Shows</h2>
                <ul>
                    {this.renderSearchedShows()}
                </ul>
                <div className="row">
                    {this.renderShows()}
                </div>
            </div>
        );
    }
}

export default LandingPage;