import React from 'react'
//
export default () => {
    const skills = [
        {
            type: 'Front end core',
            techs: ['HTML5', 'CSS', 'JS'],
        },
        {
            type: 'Task Runner/Bundlers',
            techs: ['NPM Scripts', 'Gulp', 'Webpack'],
        },
        {
            type: 'Styles',
            techs: ['Sass', 'Bootstrap', 'BEM'],
        },
        {
            type: 'JavaScript',
            techs: ['ES6', 'React.js', 'JQuery', 'Handlebars'],
        },
        {
            type: 'Linters/formatters',
            techs: ['ESLint', 'Prettier', ''],
        },
        {
            type: 'Others',
            techs: ['CI/CD'],
        },
    ]

    return (
        <div className="skill-list">
            {skills.map((skill, index) => (
                <article key={index}>
                    <header>{skill.type}</header>
                    <ul className="tech">
                        {skill.techs.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    )
}
