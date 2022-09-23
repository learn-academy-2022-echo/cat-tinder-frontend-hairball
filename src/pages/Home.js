import React from 'react'
import catcouple from "../assets/cattinder_logo.png"
import allcats from "../assets/allcats.png"
import addcat from "../assets/addcat.png"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <main>
            <h1>Welcome to</h1>
            <div >
                <img src={catcouple} alt="silhouette of a cat couple" className='picture'/>
            </div>
            <p>
                <NavLink to="/catindex"><img src={allcats} alt="All Cats" className='home_button'/>
                </NavLink>
                <NavLink to="/catnew"><img src={addcat} alt="Add a Cat" className='home_button'/>
                </NavLink>
            </p>
        </main>
    )
}

export default Home