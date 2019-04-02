import React from 'react'
import './prevnext.scss'

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className={`prevnext ${ prev ? '' : 'prevnext--right' }`}>
            {prev &&
                <li className="prev">
                    <a href={prev.fields.slug}>
                        <span className="prevnext__title">Previous: {" "} </span>
                        {prev.frontmatter.title}
                    </a>
                </li>
            }
            {next &&
                <li className="next">
                    <a href={next.fields.slug}>
                        <span className="prevnext__title">Next:  {" "} </span>
                        {next.frontmatter.title}
                    </a>
                </li>
            }
        </ul>
    )
}

export default PrevNext;