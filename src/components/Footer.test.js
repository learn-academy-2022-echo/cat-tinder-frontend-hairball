import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'

describe("<Footer/>", () => {
    it("Footer renders without error", () => {
        render(
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        const FooterText = screen.getByText(/Cathrine/i)
        expect(FooterText).toBeInTheDocument()
    })
})
