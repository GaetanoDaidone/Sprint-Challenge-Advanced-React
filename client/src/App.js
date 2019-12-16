import React from 'react';
import { useFavoritePlayers } from './hooks/useFavoritePlayers'
import './App.css';

import PlayersList from './components/PlayersList';

function App() {
  const [favoritePlayers, setFavoritePlayers] = useFavoritePlayers([]);

  return (
    <div className="App">
      <section className="container">
        <PlayersList favoritePlayers={favoritePlayers} setFavoritePlayers={setFavoritePlayers} />
      </section>
    </div>
  );
}

export default App;