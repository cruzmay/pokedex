import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext';
import { ordered } from '../../utils/ordered';
import { CardList } from '../CardList/CardList';

export const CardContainer = () => {

    const {getPokemons} = useContext(PokeContext)
    //order the data as comming from api via pokemons - pokecontext
    const orderedPokemons = getPokemons.sort(ordered)
    const total = orderedPokemons.length

    // console.log(colorOfPokemon)
    // console.log(species)
    //    const filterSpecies = species.filter( data => 
    //         data.map( col => col.color.name )
    //         .some(item => colorOfPokemon.includes(item)))
    // console.log(filterSpecies)

    return (
        <CardList 
            total={total}
            pokemons={orderedPokemons}
        />
    )
}
