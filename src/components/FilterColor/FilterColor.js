import React, { useContext, useEffect, useReducer} from 'react'
import { PokeContext } from '../../context/PokeContext'
import { ColorChecboxReducer } from '../../reducers/ColorChecboxReducer'
import { noRepeatElement } from '../../utils/noRepeatElement'
import { ordered } from '../../utils/ordered'

export const FilterColor = () => {
    const { species, setCheckboxColor } = useContext(PokeContext)
    
    const types = species.map( data => {
      return data.color.name
    })
    let colorCheckboxes = types.filter( noRepeatElement )
    let arrColorCheckBoxes = colorCheckboxes.map((filt, i) => {
        return {
            color: filt,
            checked: false,
            id: i
        }
    })
    let colorCheckBoxesOrdered = arrColorCheckBoxes.sort(ordered)
 
    const init = () => colorCheckBoxesOrdered
    const [ FilterColor, dispatch] = useReducer(ColorChecboxReducer, [], init)

    const handleCheckbox = (e) => {
        dispatch({
            type: 'toogleColorFilter',
            payload: e.target.value
        }) 
        
    }
    useEffect(()=>{
        setCheckboxColor(FilterColor)
    },[FilterColor, setCheckboxColor])

    console.log(FilterColor)
    
    return (
        <>
            <h2>types</h2>
                {
                    colorCheckBoxesOrdered.map( check => {
                        return (
                        <div key={check.id}>
                            <input 
                            type="checkbox" 
                            value={check.color}
                            onClick={handleCheckbox}
                            />
                            <label>{check.color}</label>
                        </div>
                        )
                    })
                }
        </>
    )
}
