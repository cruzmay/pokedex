import React, { memo, useCallback, useContext, useEffect, useReducer} from 'react'
import { PokeContext } from '../../context/PokeContext'
import { ColorChecboxReducer } from '../../reducers/ColorChecboxReducer'
import { noRepeatElement } from '../../utils/noRepeatElement'
import { ordered } from '../../utils/ordered'

export const FilterColor = memo(() => {
    const { species, setCheckboxColor } = useContext(PokeContext)
    
    const colors = species.map( data => {
      return data.color.name
    })
    const colorCheckboxes = colors.filter( noRepeatElement )
    const arrColorCheckBoxes = colorCheckboxes.map((ele, i) => {
        return {
            color: ele,
            checked: false,
            id: i
        }
    })
    const colorCheckBoxesOrdered = arrColorCheckBoxes.sort(ordered)
 
    const initColor = () => colorCheckBoxesOrdered
    const [ FilterColor, dispatch] = useReducer(ColorChecboxReducer, [], initColor)

     const handleColorCheckbox = useCallback((e) => { dispatch({
            type: 'toogleColorFilter',
            payload: e.target.value
        }) },[dispatch])

    useEffect(()=>{
        setCheckboxColor(FilterColor)
    },[FilterColor, setCheckboxColor])

    console.log('color', FilterColor)
    
    return (
        <>
            <h2>Color</h2>
                {
                    colorCheckBoxesOrdered.map( check => {
                        return (
                        <div key={check.id}>
                            <input 
                            type="checkbox" 
                            value={check.color}
                            onClick={handleColorCheckbox}
                            />
                            <label>{check.color}</label>
                        </div>
                        )
                    })
                }
        </>
    )
})
