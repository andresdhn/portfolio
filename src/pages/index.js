import React from 'react'
import Fade from 'react-reveal/Fade'
import Page from 'components/Page'
import SkillList from 'components/SkillList'
//
export default () => (
    <Page>
        <div className="container">
            <section className="hero">
                <Fade bottom delay={5}>
                    <div>
                        <h1>Andres Hernandez Navas</h1>
                        <h2>Web Developer</h2>
                    </div>
                </Fade>
            </section>

            <section id="skills">
                <div className="container">
                    <h1>My Skills</h1>
                    <SkillList />
                </div>
            </section>
        </div>
    </Page>
)
