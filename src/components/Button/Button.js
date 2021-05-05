import React from 'react'

export const Button = ({action, text}) => {
    return (
        <button
        onClick={action}
        >
            {text}
        </button>
    )
}
