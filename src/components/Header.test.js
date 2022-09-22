import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import userEvent from '@testing-library/user-event'


describe("<Header/>", () => {
    it("Header renders without error", () => {
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const headerText = screen.getByText(/Take me to the cats/i)
        expect(headerText).toBeInTheDocument()
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByRole('link', { name: /take me to the cats/i})
        const addText = screen.getByRole('link', {name: /add a cat/i})

        // userEvent.click(indexText)
        expect(indexLink.getAttribute('href')).toBe('/catindex')
        // userEvent.click(addText)
        // expect(screen.getByText(/catnew/i)).toBeInTheDocument()
        expect(addText.getAttribute('href')).toBe('/catnew')
    })
})