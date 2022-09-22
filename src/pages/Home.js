import React from 'react'
import catcouple from "../assets/catcouple.png"
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <h1>Welcome to Cat Tinder</h1>
            <img src={catcouple} alt="silhouette of a cat couple"/>
        </main>
    )
}

export default Home