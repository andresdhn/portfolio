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
            <Head title="andresdhn | Work" />
            <div className="container">
                <h2 className="text--center strong">
                    Check out the projects <br />
                    I've been working on recently
                </h2>
                <section className="projects">
                    {/* TODO: Alternate Tiles and Links */}
                    {posts.map(post => (
                        <div key={post.data.id} className="grid projects__row">
                            <div className="grid__cell">
                                <Link to={`/work/${post.data.slug}/`}>
                                    <div
                                        className="tile"
                                        style={{
                                            backgroundImage: `url(/media/work/thumb-${post.data.slug}.png)`,
                                        }}
                                    >
                                        <div className="tile__title">
                                            {post.data.title}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid__cell">
                                <Link to={`/work/${post.data.slug}/`}>
                                    <div className="margin--LX3">
                                        <h2>{post.data.title}</h2>
                                        <p>{post.data.type}</p>
                                        {/* TODO: two links to details and view project*/}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
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
