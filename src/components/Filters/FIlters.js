import React from 'react'
import { FilterColor } from '../FilterColor/FilterColor'
import { FilterType } from '../FilterType/FilterType'
import { FilterGenre } from '../FilterGenre/FilterGenre'

export const FIlters = () => {
    return (
        <aside className="filters">
                <FilterType />
                <FilterColor/>
                <FilterGenre />
        </aside>
    )
}
