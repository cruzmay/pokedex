import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext';
import { ordered } from '../../utils/ordered';
import { FilterPokemons } from '../FilterPokemons/FilterPokemons';
import { SearchPokemon } from '../SearchPokemon/SearchPokemon';

export const CardContainer = () => {

    const {checkbox, checkboxColor, pokemons, species} = useContext(PokeContext)
    //order the data as comming from api via pokemons - pokecontext
    const orderedPokemons = pokemons.sort(ordered)
    const orderedSpecies = species.sort(ordered)
    //get the lengt of the array to limit results in comps below 
    const total = orderedPokemons.length
    // filter by Type, if true shows in the view
    const filterType = checkbox.filter(data => data.checked !== false)
    const typeOfPokemon = filterType.map( data => data.type)
    //filter by color
    const filterColor = checkboxColor.filter(data => data.checked !== false)
    const colorOfPokemon = filterColor.map(data => data.color)

    // console.log(colorOfPokemon)
    // console.log(species)
    //    const filterSpecies = species.filter( data => 
    //         data.map( col => col.color.name )
    //         .some(item => colorOfPokemon.includes(item)))
    // console.log(filterSpecies)

    return (
        filterType.length > 0 
        ? <FilterPokemons 
            orderedPokemons={orderedPokemons}
            orderedSpecies={orderedSpecies}
            typeOfPokemon={typeOfPokemon}
            colorOfPokemon={colorOfPokemon}
            />
        : <SearchPokemon 
            orderedPokemons={orderedPokemons}
            total={total}
            />
    )
}
