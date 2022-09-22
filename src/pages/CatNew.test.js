import React, { useState } from 'react'
import CatNew from './CatNew'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<CatNew/>', () => {
    it("CatNew page renders for the user", () => {
        render(
            <BrowserRouter>
                <CatNew/>
            </BrowserRouter>
        )
        expect(screen.getByText("Add a cat")).toBeInTheDocument()
    })
    it("displays a form for the user", () => {
        render(
            <BrowserRouter>
                <CatNew/>
            </BrowserRouter>
        )
        const formThing = screen.getAllByRole('textbox')
        screen.debug(formThing)
        expect(formThing.length).toEqual(3)
    })
})