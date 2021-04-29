import { useEffect, useState } from 'react'
import { ApiCall } from '../utils/ApiCall'

export const useApiGate = () => {
    const [state, setstate] = useState({
        pokemons: [],
        species: [],
        gender: [],
        loading: true
        })

    useEffect(()=>{
        ApiCall().then( data => { setstate({
            pokemons: data.pokemons,
            species: data.species,
            gender: data.gender,
            loading: false
        })})
    },[])

    return state
}
