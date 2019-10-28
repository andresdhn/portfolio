import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Wrapper from 'components/Wrapper'
import Navbar from 'components/Navbar'
import './app.scss'

function App() {
    return (
        <Root>
            <Navbar />
            <Wrapper>
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </Wrapper>
        </Root>
    )
}

export default App
