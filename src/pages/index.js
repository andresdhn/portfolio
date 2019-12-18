import React from 'react'
import Fade from 'react-reveal/Fade'
import Page from 'components/Page'
//
export default () => (
    <Page>
        <div className="container">
            <section className="hero">
                <Fade bottom>
                    <div>
                        <h1>Andres Hernandez Navas</h1>
                        <h2>Front-end Developer</h2>
                    </div>
                </Fade>

                {/* TODO: Move Skill list to here, make scrollable naviagtion */}
            </section>
        </div>
    </Page>
)
