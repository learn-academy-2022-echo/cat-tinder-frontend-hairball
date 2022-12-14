import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catlogo from '../assets/cattinder_logo.png'

const Header = () => {
    return (
        <header className="header">
        <Nav card pills >
        <img src={catlogo} alt="Cat Tinder logo" className="logo"/>
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catindex">Take me to the cats!</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catnew">Add a Cat</NavLink>
            </NavItem>
        </Nav>
    </header>
    )
}

export default Header