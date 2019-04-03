import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import './tags.scss'

const TagsPage = props => {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <div className="tags">
                <h1>All tags</h1>
                {
                    data.map((tag, i) => (
                        <Link to={`/${tag.fieldValue}`} key={i} >
                            <span className="tags__name">
                              {tag.fieldValue}
                              {/* <span className="tags__count">{tag.totalCount}</span> */}
                            </span> 
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default TagsPage;


export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }

`