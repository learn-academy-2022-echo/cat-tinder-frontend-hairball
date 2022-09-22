import React, { useState } from 'react'
import CatIndex from './CatIndex'
import mockCats from '../mockCats'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<CatIndex/>', () => {
    it("renders a card for each array element of mockCats", () => {
        render(
            <BrowserRouter>
                <CatIndex cats = {mockCats}/>
            </BrowserRouter>
        )
        mockCats.forEach(cat => expect(screen.getByText(cat.name)).toBeInTheDocument())
    })
})