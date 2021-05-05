import React from 'react'
import { CardList } from '../CardList/CardList'

export const SearchPokemon = ({ orderedPokemons, total }) => {

    return <CardList 
            pokemons={orderedPokemons} 
            total={total}
            />
}
