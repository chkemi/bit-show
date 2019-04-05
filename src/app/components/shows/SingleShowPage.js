import React, { Component } from 'react';
import { fetchSingleShow } from '../../services/ShowServices';

import './SingleShowPage.css'

class SingleShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: []
        }
    }

    componentDidMount() {
        fetchSingleShow(this.props.match.params.id)
            .then((info) => {
                this.setState({
                    show: info
                })
            })
    }

    seasonsList() {
        return !this.state.show.seasons ?
            <h3>Loading...</h3> :
            this.state.show.seasons.map((season) => <li key={season.id}>{season.premiereDate} --- {season.endDate}</li>)
    }

    countSeasons() {
        return !this.state.show.seasons ? '0' : this.state.show.seasons.length
    }

    castList() {
        return !this.state.show.seasons ?
            <h3>Loading...</h3> :
            this.state.show.cast.map(single => <li key={single.character.id}>{single.character.name}</li>)
    }

    render() {

        return (
            <>
                <h1 className='center'>{this.state.show.name}</h1>
                <div className='row'>
                    <div className='col s6'>
                        <img src={this.state.show.image} alt='Original' />
                    </div>
                    <div className='col s6'>
                        <h2>Seasons ({this.countSeasons()})</h2>
                        <ul>
                            {this.seasonsList()}
                        </ul>
                        <h2>Cast</h2>
                        <ul>
                            {this.castList()}
                        </ul>
                    </div>
                </div>
                <h2>Show Details</h2>
                <p>{this.state.show.summary}</p>
            </>
        )

    }
}

export default SingleShowPage;