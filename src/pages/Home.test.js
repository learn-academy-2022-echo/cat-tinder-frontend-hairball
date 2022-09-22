import { screen, render } from '@testing-library/react'
import Home from './Home'
import catcouple from "../assets/catcouple.png"
import { BrowserRouter } from 'react-router-dom'

describe('<Home />', () => {
    it('renders the Home page for the user with no errors', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const homeHeader = screen.getByRole('heading', { name: /Welcome to Cat Tinder/i})
        expect(homeHeader).toBeInTheDocument()
    })
})

