import { screen, render } from '@testing-library/react'
import Home from './Home'
import catcouple from "../assets/catcouple.png"


describe('<Home />', () => {
    it('renders the Home page for the user with no errors', () => {
        render(<Home/>)
        expect(screen.getByText('Home')).toBeInTheDocument()
    })
})

