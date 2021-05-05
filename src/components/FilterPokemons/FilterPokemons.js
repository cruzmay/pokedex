import React from 'react'
import { CardList } from '../CardList/CardList'

export const FilterPokemons = ( { orderedPokemons, typeOfPokemon }) => {

    // this function seek all the pokemons types, and then compare 
    // the array with some, so if one of them is true, return the filter
    const filteredByCheckboxes = orderedPokemons.filter(data => 
            data.types.map( types => types.type.name )
            .some(item => typeOfPokemon.includes(item)))
 
    const total = filteredByCheckboxes.length   
    console.log(total)      

            return (
                <CardList 
                pokemons={filteredByCheckboxes}
                total={total}
                />
            )    
}
