import React from 'react'
import { FilterColor } from '../FilterColor/FilterColor'
import { FilterType } from '../FilterType/FilterType'

export const FIlters = () => {
    return (
        <aside className="filters">
                <FilterType />
                <FilterColor/>
        </aside>
    )
}
