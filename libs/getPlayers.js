export async function getPlayers() {
  const response = await fetch("http://localhost:4000/api/getPlayer", {cache:"no-store"});
  const players = response.json();  
  return players;
}
