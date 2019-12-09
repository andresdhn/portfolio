import React from 'react'
import { Head } from 'react-static'
import Page from 'components/Page/Page'
import Projects from 'components/Projects/Projects'

export default () => {
    return (
        <Page>
            <Head title="andresdhn | Work" />
            <section className="hero">
                <div className="container">
                    <h1 className="text--center strong">
                        Check out some of my recent work
                    </h1>
                </div>
            </section>
            <section className="content">
                <div className="container">
                    <Projects />
                    <div>
                        <a href="#top" id="bottom">
                            {/* TODO: Turn into icon show on scroll 1000px*/}
                            Scroll to top!
                        </a>
                    </div>
                </div>
            </section>
        </Page>
    )
}
