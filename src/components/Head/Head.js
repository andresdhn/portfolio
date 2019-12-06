import React from 'react'
import { Head } from 'react-static'
//

export default ({ title, date, path, image, children, description }) => {
    return (
        <Head>
            {title && <title>{title + '| @andresdhn'}</title>}
            {title && <meta name="title" property="title" content={title} />}
            {description && (
                <meta
                    name="description"
                    property="description"
                    content={description}
                />
            )}

            {/* Required Open Graph Info */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_AU" />
            {title && <meta property="og:title" content={title} />}
            {title && <meta property="og:site_name" content={title} />}
            {description && (
                <meta property="og:description" content={description} />
            )}
            {date && <meta property="og:updated_time" content={date} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary" />
            {title && <meta name="twitter:title" content={title} />}
            {description && (
                <meta name="twitter:description" content={description} />
            )}
            {image && <meta name="twitter:image" content={image} />}

            {children}
        </Head>
    )
}
