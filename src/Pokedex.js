import React, { useState } from 'react'
import { Loading } from './components/Loading/Loading'
import { PokeContext } from './context/PokeContext'
import { useApiGate } from './Hooks/useApiGate'
import { AppRouter } from './routers/AppRouter'

export const Pokedex = () => {

    const { pokemons, gender, species, loading } = useApiGate()
    const [ checkbox, setcheckbox ] = useState([])
    const [ checkboxColor, setCheckboxColor] = useState([])

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
            }}
        >
            {
                loading 
                ? <Loading/>
                : <AppRouter/> 
            }
        </PokeContext.Provider>
    )
}
