import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { PokeContext } from '../../context/PokeContext'
import { GenreChecboxReducer } from '../../reducers/genreChecboxReducer'
import { noRepeatElement } from '../../utils/noRepeatElement'
import { ordered } from '../../utils/ordered'

export const FilterGenre = () => {
    const { setCheckboxGenre } = useContext(PokeContext)
    
    
        function f() {
    return Array.from(arguments);
    }
   const genders = f('all', 'male', 'female', 'genderless' )


    const genreCheckboxes = genders.filter( noRepeatElement )
    const arrGenreCheckBoxes = genreCheckboxes.map((data, i) => {
        return {
            gender: data,
            checked: false,
            id: i
        }
    })
    
    const genreCheckBoxesOrdered = arrGenreCheckBoxes.sort(ordered)
 
    const initGenre = () => genreCheckBoxesOrdered
    const [ FilterGenre, dispatch] = useReducer(GenreChecboxReducer, [], initGenre)

     const handleGenderCheckbox = useCallback((e) => { dispatch({
            type: 'toogleGenreFilter',
            payload: e.target.value
        }) },[dispatch])

    useEffect(()=>{
        setCheckboxGenre(FilterGenre)
    },[FilterGenre, setCheckboxGenre])

    
    return (
        <>
            <h2>Genre</h2>
                {
                    genreCheckBoxesOrdered.map( check => {
                        return (
                        <div key={check.id}>
                            <input 
                            type="checkbox" 
                            value={check.gender}
                            onClick={handleGenderCheckbox}
                            />
                            <label>{check.gender}</label>
                        </div>
                        )
                    })
                }
        </>
    )
}
