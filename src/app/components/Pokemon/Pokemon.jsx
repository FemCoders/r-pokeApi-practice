import React from 'react'

function Pokemon({pokemon, fav, setFav}) {

    const getFavorite = () => {
        setFav([...fav, pokemon])
    }

  return (
    <button onClick={getFavorite}>
        <h6>{pokemon.name}</h6>
        <p>{pokemon.url}</p>
    </button>
  )
}

export default Pokemon