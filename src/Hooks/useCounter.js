import { useState } from 'react'

export const useCounter = (value) => {
    const [counter, setcounter] = useState(value)

    const increase = () => {
        setcounter(counter + value)
    }
    const reset = () => {
        setcounter(value)
    }
    const decrement = () => {
        setcounter(counter - value)
    }

    return { increase, reset, decrement, counter}
}
