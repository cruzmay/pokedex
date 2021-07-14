import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'

export const SearchPokemon = () => {
    const {setsearchPokemon, search, setsearch, reset} = useContext(PokeContext)

    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    const handleSubmit = (Event) => {
      Event.preventDefault()
    setsearchPokemon(search)
    reset()
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='search'
                placeholder='search...'
                value={search}
                onChange={handleSearch}
            />
        </form>
    )
}
