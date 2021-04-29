import React from 'react'
import { FIlters } from '../Filters/FIlters'
import { Footer } from '../Footer/Footer'
import { Menu } from '../Menu/Menu'

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Menu/>
            <FIlters />
            {children}
            <Footer/>
        </div>
    )
}
