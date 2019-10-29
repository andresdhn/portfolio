import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import Page from 'components/Page'

export default function Post() {
    const { post } = useRouteData()
    return (
        <Page>
            <div className="container">
                <Link to="/work/">{'<'} Back</Link>
                <br />
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </Page>
    )
}
