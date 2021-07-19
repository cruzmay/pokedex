import React, { useEffect, useState } from 'react'
import { Loading } from './components/Loading/Loading'
import { PokeContext } from './context/PokeContext'
import { useApiGate } from './Hooks/useApiGate'
import { AppRouter } from './routers/AppRouter'

export const Pokedex = () => {

    const { pokemons, gender, species, loading } = useApiGate()
    const [ checkbox, setcheckbox ] = useState([])
    const [ checkboxColor, setCheckboxColor] = useState([])
    const [ CheckboxGenre, setCheckboxGenre] = useState([])
    const [searchPokemon, setsearchPokemon] = useState('')
    const [search, setsearch] = useState('')
    const [modal, setmodal] = useState({click: false, id: ''})

      const reset = () => {
        setsearch('')
    }


    const arrayFusion = pokemons.map(data => ({
     
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        type: data.types.map( data => data.type.name),
        gender: gender.filter(d => d.pokemon_species_details.map(c => c.pokemon_species.name).includes(data.name)),
        species: species.filter(d=> d.id === data.id),
    }))

    const pokemonArr = arrayFusion.map( data => ({
        evolution: data.species.map(data => data.evolution_chain),
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        type: data.type,
        habitat: data.species[0].habitat ? data.species[0].habitat : null,
        gender: Array.from(data.gender.map(d => d.name)), 
        color: data.species[0].color,
        description: data.species[0].flavor_text_entries.flavor_text

    }))

     const pokemon = pokemonArr.map( data => ({
        evolution: data.evolution,
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        type: data.type,
        habitat: data.habitat,
        gender: [...data.gender, 'all'], 
        color: data.color,
        description: data.description

    }))

    console.log('data poke', pokemonArr)

    const storagePokemons = JSON.parse(localStorage.getItem('pokemon')) 
    const getPokemons = storagePokemons || pokemon
    // console.log(getPokemons.length)

    useEffect(() => {
       storagePokemons === null && loading === false && localStorage.setItem('pokemon', JSON.stringify(pokemon))
       setInterval(() => {
           loading === false && localStorage.setItem('pokemon', JSON.stringify(pokemon))
       }, 86400000);
    }, [loading, pokemon, storagePokemons])

    return (
        <PokeContext.Provider
        value={{
            pokemons, 
            gender, 
            species,
            loading,
            checkbox,
            setcheckbox,
            checkboxColor,
            setCheckboxColor,
            CheckboxGenre,
            setCheckboxGenre,
            getPokemons,
            searchPokemon, 
            setsearchPokemon,
            search, 
            setsearch,
            reset,
            modal, 
            setmodal,
            }}
        >
            {
            storagePokemons === null && loading
                ? <Loading/>
                : <AppRouter/> 
            }
        </PokeContext.Provider>
    )
}
