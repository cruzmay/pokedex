import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext';
import { ordered } from '../../utils/ordered';
import { FilterPokemons } from '../FilterPokemons/FilterPokemons';
import { SearchPokemon } from '../SearchPokemon/SearchPokemon';

export const CardContainer = () => {

    const {checkbox, pokemons} = useContext(PokeContext)
    //order the data as comming from api via pokemons - pokecontext
    const orderedPokemons = pokemons.sort(ordered)
    //get the lengt of the array to limit results in comps below 
    const total = orderedPokemons.length
    // filter by Type, if true shows in the view
    const filterType = checkbox.filter(data => data.checked !== false)
    const typeOfPokemon = filterType.map( data => data.type)

    return (
        filterType.length > 0 
        ? <FilterPokemons 
            orderedPokemons={orderedPokemons}
            typeOfPokemon={typeOfPokemon}
            />
        : <SearchPokemon 
            orderedPokemons={orderedPokemons}
            total={total}
            />
    )
}
