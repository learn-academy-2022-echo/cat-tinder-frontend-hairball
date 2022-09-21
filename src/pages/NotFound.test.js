import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound', () => {
    it('renders the notfound page without error', () => {
        render(<NotFound/>)
        const notFoundText = screen.getByText(/page not found/i)
        expect(notFoundText).toBeInTheDocument()
    })
})
