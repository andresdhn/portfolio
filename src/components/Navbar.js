import React from 'react'
import { Link } from 'components/Router'

export default () => (
    <div className="navbar">
        <div className="container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
            </nav>
        </div>
    </div>
)
