import React from 'react'
import { Head } from 'react-static'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import Page from 'components/Page'

export default function Blog() {
    const { posts } = useRouteData()
    return (
        <Page>
            <div className="container">
                <h1>It's blog time.</h1>
                <div>
                    <a href="#bottom" id="top">
                        Scroll to bottom!
                    </a>
                </div>
                <div className="tiles-grid">
                    {posts.map(post => (
                        <div key={post.data.title} className="grid__cell">
                            <Link to={`/work/${post.data.slug}/`}>
                                <div
                                    className="tile"
                                    style={{
                                        backgroundImage: `./public/media/${post.data.image}`,
                                    }}
                                >
                                    <div className="tile__title">
                                        {post.data.title}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <br />
                <br />
                <div>
                    <a href="#top" id="bottom">
                        Scroll to top!
                    </a>
                </div>
            </div>
        </Page>
    )
}
