import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { getImage } from '../../utils/getImage'
import { Button } from '../Button/Button'

export const Modal = ({ modalAction, id, name, description, type }) => {
    
    const { modal, setmodal } = useContext(PokeContext)
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
            <p style={{ padding: '10px'}}>{ type }</p>
            <Button 
            action={handleClose}
            text='X'
            />
        </div>
    )
}
