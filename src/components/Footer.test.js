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