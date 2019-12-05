import React, { Component } from 'react'
import { Link } from 'components/Router'
//
export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    handleClick = () => {
        this.setState({ open: this.state.open ? false : true })
    }

    render() {
        return (
            <div className={`navbar ${this.state.open ? 'open' : ''}`}>
                <Link className="navbar__brand" to="/">
                    @andresdhn
                </Link>
                <div
                    className="navbar__toggle"
                    onClick={this.handleClick}
                ></div>
                <nav>
                    <div className="container">
                        <Link onClick={this.handleClick} to="/about">
                            About
                        </Link>
                        <Link onClick={this.handleClick} to="/work">
                            Work
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
