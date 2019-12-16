import React from 'react';
import { Card } from 'semantic-ui-react';

import PlayerCard from './PlayerCard';
import FavoritePlayers from './FavoritePlayers';

class PlayersList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      favoritePlayers: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ ...this.state, players: res }))
      .catch(err => console.error(err.response))
  }

  render() {
    return (
      <div>
        <FavoritePlayers favoritePlayers={this.props.favoritePlayers} />
        <Card.Group centered>
          {this.state.players.map(player => (
            <PlayerCard key={player.id} player={player} setFavoritePlayers={this.props.setFavoritePlayers} />
        ))}
        </Card.Group>
      </div>
    )
  }
}

export default PlayersList;
