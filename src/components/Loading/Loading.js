import React from 'react'
import pokeball from '../../assets/pokeball.gif'

export const Loading = () => {
    return (
        <div className="loading">
            <img 
            className="loading__pokeball" 
            src={pokeball}
            alt="pokeball"
            />
        </div>
    )
}
