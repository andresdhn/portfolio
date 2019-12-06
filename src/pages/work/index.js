import React from 'react'
import { Head } from 'react-static'
import Page from 'components/Page/Page'
import Projects from 'components/Projects/Projects'

export default () => {
    return (
        <Page>
            <Head title="andresdhn | Work" />
            <div className="container">
                <h2 className="text--center strong">
                    Check out the projects <br />
                    I've been working on recently
                </h2>

                <Projects />
                <br />
                <br />
                <div>
                    <a href="#top" id="bottom">
                        {/* TODO: Turn into icon show on scroll 1000px*/}
                        Scroll to top!
                    </a>
                </div>
            </div>
        </Page>
    )
}
