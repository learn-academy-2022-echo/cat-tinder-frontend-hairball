import React, { useState } from 'react'
import CatEdit from './CatEdit'
import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import mockCats from '../mockCats'

describe('<CatEdit/>', () => {
    it("CatEdit page renders for the user", () => {
        render(
            <MemoryRouter initialEntries={["/catedit/1"]}>
            <Routes>
              <Route path='catedit/:id' element={<CatEdit cats={mockCats} />}/>
            </Routes>
          </MemoryRouter>
        )
        expect(screen.getByText(`Edit ${mockCats[0].name}`)).toBeInTheDocument()
    })
    it("displays a form for the user", () => {
        render(
            <MemoryRouter initialEntries={["/catedit/1"]}>
            <Routes>
              <Route path='catedit/:id' element={<CatEdit cats={mockCats} />}/>
            </Routes>
          </MemoryRouter>
        )
        const formThing = screen.getAllByRole('textbox')
        screen.debug(formThing)
        expect(formThing.length).toEqual(3)
    })
})