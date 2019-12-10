import React from 'react'
import { Head } from 'react-static'
//
import Page from 'components/Page/Page'

const skills = [
    'HTML',
    'CSS',
    'JS',
    'JQuery',
    'Bootstrap',
    'React.js',
    'Gulp',
    'Webpack',
    'CI/CD',
]

export default () => (
    <Page>
        <Head>
            <title>Skills</title>
        </Head>
        <section id="content">
            <div className="container">
                <h1>Skills</h1>
                <div classname="skill-list">
                    {/*TODO: create skill bars or rounded charts like wow...*/}
                </div>
            </div>
        </section>
    </Page>
)
