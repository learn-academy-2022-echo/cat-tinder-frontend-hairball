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
        const editText = screen.getByRole('link', {name: /edit cat/i})
        // userEvent.click(indexText)
        expect(indexLink.getAttribute('href')).toBe('/catindex')
        // userEvent.click(addText)
        // expect(screen.getByText(/catnew/i)).toBeInTheDocument()
        expect(addText.getAttribute('href')).toBe('/catnew')
        // userEvent.click(editText)
        // expect(screen.getByText(/catedit/i)).toBeInTheDocument()
        expect(editText.getAttribute('href')).toBe('/catedit')
    })
})

/*
 PASS  src/pages/Home.test.js
 PASS  src/components/Footer.test.js
 PASS  src/components/Header.test.js
 PASS  src/pages/NotFound.test.js

Test Suites: 4 passed, 4 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        8.086 s
*/