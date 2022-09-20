import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
        <header className="header">
            <Nav
                card
                fill
                pills
            >
            <NavItem>
                <NavLink to="/catindex">
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catnew">
                Add a Cat
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/catedit">
                Edit Cat 
                </NavLink>
            </NavItem>
            
            </Nav>
        </header>
        </>
    )
}

export default Header