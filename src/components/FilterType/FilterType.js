import React, { useContext, useEffect, useReducer} from 'react'
import { PokeContext } from '../../context/PokeContext'
import { CheckBoxReducers } from '../../reducers/CheckBoxReducers'
import { noRepeatElement } from '../../utils/noRepeatElement'
import { ordered } from '../../utils/ordered'


export const FilterType = () => {
    const { pokemons, setcheckbox } = useContext(PokeContext)
    
    const types = pokemons.map( type => {
      return type.types[0].type.name
    })
    let checkboxes = types.filter( noRepeatElement )
    let arrCheckBoxes = checkboxes.map((filt, i) => {
        return {
            type: filt,
            checked: false,
            id: i
        }
    })
    let checkBoxesOrderedId = arrCheckBoxes.sort(ordered)
 
    
    const init = () => {
        return checkBoxesOrderedId
    }

    const [ FilterType, dispatch] = useReducer(CheckBoxReducers, [], init)
    
    const handleCheckbox = (e) => {

        console.log(`${e.target.value}`)
        
        dispatch({
            type: 'toogleFilter',
            payload: e.target.value
        }) 
        
    }
    useEffect(()=>{
        setcheckbox(FilterType)
    },[FilterType, setcheckbox])
    
    return (
        <div>
            <h2>types</h2>
            <form>
                {
                    checkBoxesOrderedId.map( check => {
                        return (
                        <div key={check.id}>
                            <input 
                            type="checkbox" 
                            value={check.type}
                            onClick={handleCheckbox}
                            />
                            <label>{check.type}</label>
                        </div>
                        )
                    })
                }
                
            </form>
        </div>
    )
}
