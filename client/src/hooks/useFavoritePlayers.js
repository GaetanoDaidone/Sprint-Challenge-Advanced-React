import { useLocalStorage } from './useLocalStorage';

export const useFavoritePlayers = players => {
  const [favoritePlayers, setFavoritePlayers] = useLocalStorage("favoritePlayers", players);

  const addPlayer = player => {
    setFavoritePlayers([...favoritePlayers, player]);
  }

  return [favoritePlayers, addPlayer]
}