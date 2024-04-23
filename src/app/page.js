import Image from "next/image";
import styles from "./page.module.css";
import {getPlayers} from "../../libs/getPlayers";

export default async function Home() {
  const players = await getPlayers();
  return (
    <main className={styles.main}>
      <h1>Título de prueba</h1>
      
      { players.data.map( ( player)=> (<p key={player.id}>{player.name}</p>)) }
    </main>
  );
}
