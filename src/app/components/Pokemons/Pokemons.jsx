'use client'

import { pokeapi } from '@/app/services/pokeapi'
import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon';

function Pokemons({fav, setFav}) {

    //Llamar al servicio
    //Almacenar esa respuesta dentro de un estado
    //Renderizar el resultado

    const [pokemons, setPokemons] = useState([]); //HOOK - variable - método - estado inicial

    const service = pokeapi();

    useEffect(() => {
        service.getAll().then((res) => setPokemons(res.data.results))
    }, [])

  return (
    <>
        <h2>Pokemons</h2>
        {
            pokemons.map((pokemon, index) => (
                <Pokemon key={index} pokemon={pokemon} fav={fav} setFav={setFav}/>
            ))
        }
    </>
  )
}

export default Pokemons