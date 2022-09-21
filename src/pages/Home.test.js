import { screen, render } from '@testing-library/react'
import Home from './Home'
import catcouple from "../assets/catcouple.png"


describe('<Home />', () => {
    it('renders the Home page for the user with no errors', () => {
        render(<Home/>)
        expect(screen.getByText('Home')).toBeInTheDocument()
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