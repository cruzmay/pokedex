import React from 'react'
import { getImage } from '../../utils/getImage'
import { CgPokemon } from 'react-icons/cg'

export const Card = ({name, id, handleClick, handleAdd}) => {
    
    const image = getImage(id)

    return (
        <div
         className="card"
         onClick={() => handleClick(id)}>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${image}.png`} alt={name}/>
            <h2>{name}</h2>
            <h3>{id}</h3>
            <i 
            className='card__add'
            onClick={() => handleAdd(id)}
            >
                <CgPokemon />
            </i>
        </div>
    )
}
