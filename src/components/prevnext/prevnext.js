import React from 'react'
import './prevnext.scss'

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className={`prevnext ${ prev ? '' : 'prevnext--right' }`}>
            {prev &&
                <li className="prev">
                    <a href={prev.fields.slug}>
                        <span className="prevnext__title">Previous {" "} </span>
                        <span className="prevnext__article">{prev.frontmatter.title}</span>
                    </a>
                </li>
            }
            {next &&
                <li className="next">
                    <a href={next.fields.slug}>
                        <span className="prevnext__title">Next  {" "} </span>
                        <span className="prevnext__article">{next.frontmatter.title}</span>
                    </a>
                </li>
            }
        </ul>
    )
}

export default PrevNext;