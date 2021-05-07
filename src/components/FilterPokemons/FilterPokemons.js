import React from 'react'
import { CardList } from '../CardList/CardList'

export const FilterPokemons = ( { orderedPokemons, typeOfPokemon, colorOfPokemon, orderedSpecies }) => {

    console.log('pokemons', orderedPokemons)
    // this function seek all the pokemons types, and then compare 
    // the array with some, so if one of them is true, return the filter
    const filteredByCheckboxes = orderedPokemons.filter(data => 
            data.types.map( types => types.type.name )
            .some(item => typeOfPokemon.includes(item)))
    console.log('filter',filteredByCheckboxes);
            
    console.log('species',orderedSpecies)

    const colorName = orderedSpecies.map(data => data.color.name)
    console.log(colorName);
    const filteredByColors = orderedSpecies.filter(data => 
            (data.color.name).includes(colorOfPokemon))
    
 
    const total = filteredByCheckboxes.length   
    
    // const allPokemonsFiltered = () => {
    //     if (filteredByCheckboxes.length > 0 && filteredByColors.length > 0) {
    //         return filteredByCheckboxes.filter( data => data.map( pok => pok.id ) )
    //     } else {
    //         return filteredByCheckboxes
    //     }
    // }

    // console.log('allpokemons', allPokemonsFiltered())

            return (
                <CardList 
                pokemons={filteredByCheckboxes}
                total={total}
                />
            )    
}
