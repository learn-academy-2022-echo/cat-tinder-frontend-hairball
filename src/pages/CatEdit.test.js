import React, { useState } from 'react'
import CatEdit from './CatEdit'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<CatEdit/>', () => {
    it("CatEdit page renders for the user", () => {
        render(
            <BrowserRouter>
                <CatEdit/>
            </BrowserRouter>
        )
        expect(screen.getByText("Edit Cat")).toBeInTheDocument()
    })
    it("displays a form for the user", () => {
        render(
            <BrowserRouter>
                <CatEdit/>
            </BrowserRouter>
        )
        const formThing = screen.getAllByRole('textbox')
        screen.debug(formThing)
        expect(formThing.length).toEqual(3)
    })
})