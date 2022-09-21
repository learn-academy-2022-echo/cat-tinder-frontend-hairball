import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catcouple from '../assets/catcouple.png'

const Header = () => {
    return (
    <header className="header">
        <Nav card fill pills justified>
            <NavLink to="/"><img src={catcouple} alt="Cat Tinder logo" className="logo"/></NavLink>
            <NavItem>
                <NavLink to="/catindex">Take me to the cats!</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catnew">Add a Cat</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catedit">Edit Cat </NavLink>
            </NavItem>
        </Nav>
    </header>
    )
}

export default Header