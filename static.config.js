import React, { Component } from 'react'
import fs from 'fs'
import klaw from 'klaw'
import path from 'path'
import matter from 'gray-matter'

const getPosts = fileDir => {
    const items = []
    const postsDir = fileDir

    // Walk ("klaw") through posts directory and push file paths into items array //
    const getFiles = () =>
        new Promise(resolve => {
            // Check if posts directory exists //
            if (fs.existsSync(postsDir)) {
                klaw(postsDir)
                    .on('data', item => {
                        // Filter function to retrieve .md files //
                        if (path.extname(item.path) === '.md') {
                            // If markdown file, read contents //
                            const data = fs.readFileSync(item.path, 'utf8')
                            // Convert to frontmatter object and markdown content //
                            const dataObj = matter(data)
                            // Create slug for URL //
                            dataObj.data.slug =
                                dataObj.data.date +
                                '-' +
                                dataObj.data.title
                                    .toLowerCase()
                                    .replace(/ /g, '-')
                                    .replace(/[^\w-]+/g, '')
                            // Remove unused key //
                            delete dataObj.orig
                            // Push object into items array //
                            items.push(dataObj)
                        }
                    })
                    .on('error', e => {
                        console.log(e)
                    })
                    .on('end', () => {
                        // Resolve promise for async getRoutes request //
                        // posts = items for below routes //

                        // If an order metadata is present order results by it
                        if (items[0].data.order) {
                            items.sort((a, b) =>
                                a.data.order > b.data.order
                                    ? 1
                                    : b.data.order > a.data.order
                                    ? -1
                                    : 0
                            )
                        } else {
                            // Default reverse order to get latest posts first
                            items.reverse()
                        }

                        // Lastly filters out all hidden posts
                        let visibleItems = items.filter(item => {
                            return item.data.visible === true
                        })

                        resolve(visibleItems)
                    })
            } else {
                // If src/posts directory doesn't exist, return items as empty array //
                resolve(items)
            }
        })

    return getFiles()
}

export default {
    getRoutes: async () => {
        const posts = await getPosts('./src/posts')

        return [
            {
                path: '/work',
                component: 'src/pages/work',
                getData: () => ({
                    posts,
                }),
                children: posts.map(post => ({
                    path: `/${post.data.slug}`,
                    template: 'src/containers/Post',
                    getData: () => ({
                        post,
                    }),
                })),
            },
        ]
    },

    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        require.resolve('react-static-plugin-sass'),
    ],

    Document: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children, siteData } = this.props

            return (
                <Html lang="en-AU">
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Jura:300,500&display=swap"
                            rel="preload"
                            as="style"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Jura:300,500&display=swap"
                            rel="stylesheet"
                        />

                        <title>Portfolio | @andresdhn</title>
                    </Head>
                    <Body>{children}</Body>
                </Html>
            )
        }
    },
}
