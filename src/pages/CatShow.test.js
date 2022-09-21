import { screen, render } from '@testing-library/react'
import CatShow from './CatShow'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import mockCats from '../mockCats'

const showCatPage = () => {
    render(
      <MemoryRouter initialEntries={["/catshow/3"]}>
        <Routes>
          <Route path='catshow/:id' element={<CatShow cats={mockCats} />}/>
        </Routes>
      </MemoryRouter>
    )
  } 

describe("<CatShow/>", () => {
    const cat = mockCats[2]
    it("renders a single cat card without error", () => {
        showCatPage()
        expect(screen.getByText(cat.name)).toBeInTheDocument()
    })
})