import React from 'react'
import { getImage } from '../../utils/getImage'

export const Card = ({name, id}) => {
    
    const image = getImage(id)

    return (
        <div className="card">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${image}.png`} alt={name}/>
            <h2>{name}</h2>
            <h3>{id}</h3>
        </div>
    )
}
