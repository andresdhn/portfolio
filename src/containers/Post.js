import React from 'react'
import { useRouteData } from 'react-static'
import Markdown from 'react-markdown'
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
                <h3>
                    {post.data.date} - {post.data.title}
                </h3>
                <Markdown source={post.content} escapeHtml={false} />
            </div>
        </Page>
    )
}
