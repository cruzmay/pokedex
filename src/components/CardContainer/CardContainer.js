import React, { useContext, useState } from 'react'
import { PokeContext } from '../../context/PokeContext';
import { ordered } from '../../utils/ordered';
import { Card } from '../Card/Card'

export const CardContainer = () => {

    const [counter, setcounter] = useState(20)
    const {checkbox} = useContext(PokeContext)

    console.log(checkbox)

    const increase = () => {
        setcounter(counter + 20)
    }
    const reset = () => {
        setcounter(20)
    }


    const {pokemons} = useContext(PokeContext)
    
    const orderedPokemons = pokemons.sort(ordered)
    const total = orderedPokemons.length

    console.log(orderedPokemons)

    const returnCheck = checkbox.map( data => {
        return data
    })
    console.log(returnCheck)

    const returndata = orderedPokemons.map( data => {
            if(returnCheck.checked){
                return data.filter( poke => poke.type.includes(returnCheck.type))
            }
        })
    console.log(returndata)
    

    return (
        <section className="card-container">
                    {
                        orderedPokemons.map( (poke, index ) => 
                        (index < counter ) &&
                        <Card 
                            {...poke} 
                            key={poke.id}/> 
                        )
                    }

            {
                counter < total 
                ? <button
                onClick={increase}
                >
                    see more ...
                </button>
                : <button
                    onClick={reset}    
                >
                    reset
                </button>
            }
            
        </section>
    )
}
