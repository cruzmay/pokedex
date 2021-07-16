import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { getImage } from '../../utils/getImage'
import { Button } from '../Button/Button'

export const Modal = ({ modalAction, id, name, description, type }) => {

    const set = new Set(type)
    const Types = Array.from(set) 
   
    // const setEvolution = new Set(type)
  
    const { modal, setmodal, getPokemons } = useContext(PokeContext)
    
     const evolution = getPokemons.filter(c => c.evolution[0].evolves_1 === name || c.evolution[0].evolves_2 === name || c.evolution[0].evolves_3 === name )
     console.log(evolution)
    const handleClose = () => {
        setmodal({...modal, click: false})
    }
    const image = getImage(id)

    return (
        <div className={modalAction ? 'modal__container modal__show' : 'modal__container modal__hide' }>
            <h2>este es un modal con id: {id}</h2>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${image}.png`} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            {
                Types.map( d => <p style={{ padding: '10px'}} key={d}>{ d }</p>)
            }
            <div style={{display: 'flex'}}>
            {
                evolution.map(data => <div><img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getImage(data.id)}.png`} alt={data.name}/><p>{data.name}</p></div>)
            }
            </div>
            <Button 
            action={handleClose}
            text='X'
            />
        </div>
    )
}
