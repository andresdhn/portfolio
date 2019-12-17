import React from 'react'
import { Link } from 'components/Router'
import { useRouteData } from 'react-static'
import '../styles/components/Projects.scss'
//
export default props => {
    const { posts } = useRouteData()
    return (
        <section id="projects">
            {posts.map(post => (
                <article key={post.data.id} className="project">
                    <div className="project__container">
                        <div className="project__cell project__cell--media">
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
                        <div className="project__cell project__cell--text">
                            <Link to={`/work/${post.data.slug}/`}>
                                <div className="margin--LX3">
                                    <h2>{post.data.title}</h2>
                                    <p>{post.data.type}</p>
                                    {/* TODO: two links to details and view project*/}
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}
