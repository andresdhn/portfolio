import React from 'react'
import { useRouteData } from 'react-static'
import Markdown from 'react-markdown'
//
import { Link } from 'components/Router'
import Page from 'components/Page'
import Head from 'components/Head'
//
export default function Post() {
    const { post } = useRouteData()
    return (
        <Page>
            <Head
                title={post.data.title}
                description={post.data.description}
                image={post.data.metaimage}
            />
            <div className="container">
                <Link to="/work/">{'<'} Back</Link>
                <br />
                <h3>
                    {post.data.date} - {post.data.title}
                </h3>
                <Markdown source={post.content} escapeHtml={false} />

                <ul className="techlist">
                    {post.data.tags.map((tag, index) => (
                        <li key={index} className="tech">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </Page>
    )
}
