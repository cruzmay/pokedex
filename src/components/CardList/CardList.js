import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { useCounter } from '../../Hooks/useCounter'
import { FilterSearch } from '../../utils/FilterSearch'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { Modal } from '../Modal/Modal'

export const CardList = () => {

    const filteredPokemons = FilterSearch()
    const total = filteredPokemons.length
    const { counter, increase } = useCounter(20)
    const {modal, setmodal} = useContext(PokeContext)
    

    const handleClick = (id) => {
        const dataModal = filteredPokemons.find(data => data.id === id)
        setmodal({ click: true, data: dataModal })
        console.log(dataModal)
    }

    return (
        <>
        {
            filteredPokemons.length === 0 
            && <h1>No results founded...</h1>
        }
        <section className="card-list">
            {
            filteredPokemons.map( (poke, index ) => 
                (index < counter ) &&
                    <Card
                        {...poke} 
                        key={poke.id}
                        handleClick={handleClick}
                    /> 
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
            <Modal
                modalApparience={''}
                modalAction={modal.click}
                {...modal.data}
            />
        </>
    )
}
