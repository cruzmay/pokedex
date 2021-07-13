import React, { useContext, useState } from 'react'
import { PokeContext } from '../../context/PokeContext'

export const SearchPokemon = () => {
    const {setsearchPokemon} = useContext(PokeContext)
    const [search, setsearch] = useState('')

    const reset = () => {
        setsearch('')
    }

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
