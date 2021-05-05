import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'

export const CardList = ({pokemons, total}) => {
    const { counter, increase } = useCounter(20)
    return (
        <>
        <section className="card-container">
            {
            pokemons.map( (poke, index ) => 
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
