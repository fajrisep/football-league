import React, { Component } from 'react';
import axios from 'axios';

class Epl extends Component {
    constructor() {
        super();
        this.state = { data: [] }
    }

    componentDidMount() {
        let url = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819';
        axios.get(url)
            .then((res) => {
                this.setState({ data: res.data.table });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const table = [...this.state.data].sort(function (a, b) {
            if (a.total > b.total) { return -1 }
            if (a.total < b.total) { return 1 }
            return 0;
        });
        const showTable = table.map((club, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{club.name}</td>
                <td>{club.played}</td>
                <td>{club.win}</td>
                <td>{club.draw}</td>
                <td>{club.loss}</td>
                <td>{club.goalsfor}</td>
                <td>{club.goalsagainst}</td>
                <td>{club.goalsdifference}</td>
                <td>{club.total}</td>
            </tr>
        );
        return (
            <div>
                {/* navbar */}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header row">
                            <div className="col-12 col-sm-2">
                                <img src="https://www.premierleague.com/resources/ver/i/elements/premier-league-logo-header.png" alt="epl-logo" className="img-logo" />
                            </div>
                            <div className="col-12 col-sm-10">
                                <h1>English Premier League</h1>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* standings */}
                <div className="col-xs-12 col-sm-10 offset-sm-1">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Pos.</th>
                                <th>Club</th>
                                <th>MP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showTable}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Epl;
