import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound', () => {
    it('renders the notfound page without error', () => {
        render(<NotFound/>)
        const notFoundText = screen.getByText(/page not found/i) // i on regex ignores casing
        expect(notFoundText).toBeInTheDocument()
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