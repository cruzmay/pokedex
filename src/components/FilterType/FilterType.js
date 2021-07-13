import React, { memo, useCallback, useContext, useEffect, useReducer} from 'react'
import { PokeContext } from '../../context/PokeContext'
import { CheckBoxReducers } from '../../reducers/CheckBoxReducers'
import { noRepeatElement } from '../../utils/noRepeatElement'
import { ordered } from '../../utils/ordered'

export const FilterType = memo(() => {
    const { getPokemons, setcheckbox } = useContext(PokeContext)
    
    const types = getPokemons.map( data => data.type[0])


    const checkboxes = types.filter( noRepeatElement )
    const arrCheckBoxes = checkboxes.map((filt, i) => {
        return {
            type: filt,
            checked: false,
            id: i
        }
    })
    const checkBoxesOrderedId = arrCheckBoxes.sort(ordered)
 
    const init = () => checkBoxesOrderedId
    const [ FilterType, dispatch] = useReducer(CheckBoxReducers, [], init)

    const handleCheckbox = useCallback((e) => { dispatch({
            type: 'toogleFilter',
            payload: e.target.value
        }) },[dispatch])
        
    useEffect(()=>{
        setcheckbox(FilterType)
    },[FilterType, setcheckbox])

    // console.log('type', FilterType)

    return (
        <>
            <h2>types</h2>
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
        </>
    )
})
