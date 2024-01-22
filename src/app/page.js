'use client'

import { useState } from "react";
import Favorites from "./components/Favorites/Favorites";
import Pokemons from "./components/Pokemons/Pokemons";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import { favsapi } from "./services/favsapi";

export default function Home() {

  const [fav, setFav] = useState([]);

  const favsApi = favsapi();

  const savePokes = () => {
    favsApi.createFav(fav).then((res) => alert(`Los pokemones han sido creados, status: ${res.status}`)).catch(error => console.log(error))
  }

  return (
    <main className={styles.main}>
      <h1>PokeAPI</h1>
      <Pokemons fav={fav} setFav={setFav}/>
      <Favorites fav={fav}/>
      <Button action={() => savePokes()}>Guardar</Button>
    </main>
  );
}