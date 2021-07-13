import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { useCounter } from '../../Hooks/useCounter'
import { ordered } from '../../utils/ordered'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'

export const CardList = () => {

    const {getPokemons, checkbox, checkboxColor, CheckboxGenre, searchPokemon } = useContext(PokeContext)
  
    //order the data as comming from api via pokemons - pokecontext
   
    const orderedPokemons = getPokemons.sort(ordered)

    //getting filtered by type
    const filteredType = checkbox.filter(data => data.checked)
    const typeOfPokemon = filteredType.map(data => data.type)
 

    //getting filtered by color

    const filteredCol = checkboxColor.filter(data => data.checked)
    const colorOfPokemon = filteredCol.map(data => data.color)
   

    //getting filtered by gender

    const filteredGender= CheckboxGenre.filter(data => data.checked)
    const genderOfPokemon = filteredGender.map(data => data.gender)
   


    const handleFilters = () => {
        if(filteredType.length > 0 && filteredCol.length === 0 && filteredGender.length === 0 ) {
            //filtered by type
            return orderedPokemons.filter( data => data.type.some( c => typeOfPokemon.includes(c)))
        } else if ( filteredType.length === 0 && filteredCol.length > 0 && filteredGender.length === 0 ) {
            //filtered by color
            return orderedPokemons.filter(data => colorOfPokemon.includes(data.color))
        } else if ( filteredType.length > 0 && filteredCol.length > 0 && filteredGender.length === 0  ) {
            //filtered by type and color
            return orderedPokemons.filter( data => data.type.some( c => typeOfPokemon.includes(c)) &&  colorOfPokemon.includes(data.color) )
        } else if ( filteredType.length > 0 && filteredCol.length > 0 && filteredGender.length > 0  ) {
            //filtered by type, color, gender
            return orderedPokemons.filter(data => data.gender.some( c => genderOfPokemon.includes(c)) 
            && data.type.some( c => typeOfPokemon.includes(c)) && colorOfPokemon.includes(data.color))
        } else if ( filteredType.length === 0 && filteredCol.length > 0 && filteredGender.length > 0  ) {
            //filtered by color and gender
            return orderedPokemons.filter(data => data.gender.some( c => genderOfPokemon.includes(c)) 
            && colorOfPokemon.includes(data.color))
        } else if ( filteredType.length > 0 && filteredCol.length === 0 && filteredGender.length > 0  ) {
            //filtered by type and gender
            return orderedPokemons.filter(data => data.gender.some( c => genderOfPokemon.includes(c)) 
            && data.type.some( c => typeOfPokemon.includes(c)))
        } else if ( filteredType.length === 0 && filteredCol.length === 0 && filteredGender.length > 0  ) {
            //filtered by gender
            return orderedPokemons.filter(data => data.gender.some( c => genderOfPokemon.includes(c))) 
        } else if (searchPokemon.length > 0 ) {
            //filtered by gender
            return orderedPokemons.filter(data => data.name.includes(searchPokemon) || data.color.includes(searchPokemon) || data.type.includes(searchPokemon) || data.id === parseInt(searchPokemon) )
        } else {
            // all pokemons 
            return orderedPokemons
        }
    }

    const filteredPokemons = handleFilters()

    const total = filteredPokemons.length

    const { counter, increase } = useCounter(20)


    return (
        <>
        {
            filteredPokemons.length === 0 
            && <h1>No se encontraron resultados</h1>
        }
        <section className="card-container">
            {
            filteredPokemons.map( (poke, index ) => 
                (index < counter ) &&
                    <Card
                        {...poke} 
                        key={poke.id}/> 
                        )
                    }
        </section>
            {
            counter < total && 
            <Button
            action={increase}
            text={'see more...'}
            />
               
            }
        </>
    )
}
