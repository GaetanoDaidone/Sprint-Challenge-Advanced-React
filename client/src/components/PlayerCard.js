import React from 'react';
import { Card } from 'semantic-ui-react';

class PlayerCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const player = this.props.player;

    return (
      <Card onClick={() => {
        this.props.setFavoritePlayers(player)
      }}>
        <Card.Content>
          <Card.Header>{player.name}</Card.Header>
          <Card.Meta>{player.country}</Card.Meta>
          <Card.Description>{player.name} has been searched {player.searches} times.</Card.Description>
        </Card.Content>
      </Card> 
    )
  }
}

export default PlayerCard;