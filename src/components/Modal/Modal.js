import React, { useContext } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { Button } from '../Button/Button'
import { ImArrowRight2 } from "react-icons/im";
import { imageLink } from '../../utils/imageLink';

export const Modal = ({ modalAction, id, name, description, type, evolution }) => {

    const set = new Set(type)
    const Types = Array.from(set) 
    
    // const setEvolution = new Set(type)
  
    const { modal, setmodal, getPokemons } = useContext(PokeContext)

    const getEvolId =  () => {
        if ( evolution) {
            const evol_1 = evolution[0].evolves_1 !== null ? getPokemons.filter(data => data.id === parseInt(evolution[0].evolves_1.slice(42, -1))) : null
            const evol_2 = evolution[0].evolves_2 !== null ? getPokemons.filter(data => data.id === parseInt(evolution[0].evolves_2.slice(42, -1))) : null
            const evol_3 = evolution[0].evolves_3 !== null ? getPokemons.filter(data => data.id === parseInt(evolution[0].evolves_3.slice(42, -1))) : null
            return { evol_1, evol_2, evol_3}
        }
        else {
            return null
        }
    }
    const evolves = getEvolId()

    const handleClose = () => {
        setmodal({...modal, click: false})
    }
    
    return (
        <div className={modalAction ? 'modal__container modal__show' : 'modal__container modal__hide' }>
            <h2>este es un modal con id: {id}</h2>
            <img 
                src={ imageLink( id, 'full') }  
                alt={name}
            />
            <h3>{name}</h3>
            <p>{description}</p>
            {
                Types.map( d => <p style={{ padding: '10px'}} key={d}>{ d }</p>)
            }
            <div style={{display: 'flex'}}>
                {
                   ( evolution && evolves.evol_1 !== null && evolves.evol_2 !== null ) 
                   ? <div className={evolves.evol_1[0].id === id ? 'modal__highlight' : null } >
                       <img 
                        src={imageLink(evolves.evol_1[0].id, 'detail')} 
                        alt={evolves.evol_1[0].name}/>
                       <p>{evolves.evol_1[0].name}</p>
                    </div>
                   : <h3>This Pokémon does not evolve</h3>
                }
                {
                    ( evolution && evolves.evol_2 !== null) &&  
                    <i><ImArrowRight2/></i>
                }
                 {
                   ( evolution && evolves.evol_2 !== null) && 
                    <div className={ evolves.evol_2[0].name === name ? 'modal__highlight' : null }>
                       <img
                        src={imageLink(evolves.evol_2[0].id, 'detail')} 
                        alt={evolves.evol_2[0].name}/>
                       <p>{evolves.evol_2[0].name}</p>
                    </div>
                }
                {
                    ( evolution && evolves.evol_3 !== null) && 
                     <i><ImArrowRight2/></i>
                }
                 {
                   ( evolution && evolves.evol_3 !== null) && 
                   <div className={ evolves.evol_3[0].id === id ? 'modal__highlight' : null } >
                       <img 
                        src={imageLink(evolves.evol_3[0].id, 'detail')} 
                        alt={evolves.evol_3[0].name}/>
                       <p>{evolves.evol_3[0].name}</p>
                    </div>
                }
            </div>
            
            <Button 
            action={handleClose}
            text='X'
            />
        </div>
    )
}
