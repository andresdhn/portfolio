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
                <div className="post-body">
                    <h1>
                        {post.data.date} - {post.data.title}
                    </h1>

                    <Markdown source={post.content} escapeHtml={false} />

                    {/* TODO: Change techlist style something more subtle */}
                    <ul className="techlist">
                        {post.data.techlist.map((tech, index) => (
                            <li key={index} className="tech">
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <p>
                        Have a look at the actual project by&nbsp;
                        <a
                            href={post.data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            clicking here
                        </a>
                    </p>
                </div>
            </div>
        </Page>
    )
}
