import React from 'react'
import Favorite from '../Favorite/Favorite'

function Favorites({fav}) {
  return (
    <>
        <h2>Favoritos</h2>
        {
            fav.map((poke, index) => (
                <Favorite key={index} poke={poke}/>
            ))
        }
    </>
  )
}

export default Favorites

//useContext - HOOK - valores globales 