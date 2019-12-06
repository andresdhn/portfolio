import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Wrapper from 'components/Wrapper/Wrapper'
import Navbar from 'components/Navbar/Navbar'
import './App.scss'

export default () => {
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
