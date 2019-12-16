import React from 'react';
import { List } from 'semantic-ui-react';

class FavoritePlayers extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <List  data-testid='favorite-players' horizontal>
        {this.props.favoritePlayers ?
          this.props.favoritePlayers.map(player => (
            <List.Item key={player.id}>
              <List.Header>{player.name}</List.Header>
              {player.country}
            </List.Item>
          )) 
          :
          <h2>You have not selected any favorite players</h2>
        }
      </List>
    )
  }
}

export default FavoritePlayers;