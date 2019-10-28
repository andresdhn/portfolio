import React from 'react'
import { Head } from 'react-static'
import { useRouteData } from 'react-static'

//
import { Link } from 'components/Router'

export default function Blog() {
    const { posts } = useRouteData()
    return (
        <div>
            <h1>It's blog time.</h1>
            <div>
                <a href="#bottom" id="top">
                    Scroll to bottom!
                </a>
            </div>
            <br />
            <br />
            <br />
            All Posts:
            <ul>
                {posts.map(post => (
                    <li key={post.data.title}>
                        <Link to={`/work/${post.data.slug}/`}>
                            {post.data.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <div>
                <a href="#top" id="bottom">
                    Scroll to top!
                </a>
            </div>
        </div>
    )
}
