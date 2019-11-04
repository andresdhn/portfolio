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
                    {post.data.techlist.map((tech, index) => (
                        <li key={index} className="tech">
                            {tech}
                        </li>
                    ))}
                </ul>

                <p>
                    To check out the project please
                    <a
                        href={post.data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        click here
                    </a>
                </p>
            </div>
        </Page>
    )
}
