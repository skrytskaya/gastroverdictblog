import React from 'react';
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import PrevNext from '../../components/prevnext/prevnext'
import MetaTags from '../../components/metatags'
import Share from '../../components/share/share'
import Img from 'gatsby-image'
import './blog-post.scss'

function BlogPost(props) {
    const url = props.data.site.siteMetadata.siteUrl
    // const thumbnail = props.data.markdownRemark.frontmatter.image && props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    const { title, image, tags, alt } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;
    console.log({ image })

    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                // thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div className="post-container">
                <div className="post">
                    <h1>{title}</h1>
                    {image &&
                        <div className="post__image">
                            <img
                                src={image}
                            // sizes="(min-width: 40em) 80vw, 100vw"
                            // alt={`${alt ? alt : 'image' }`}
                            />
                        </div>
                    }

                    {/* {image && 
                        <Img 
                            fluid={image.childImageSharp.fluid} 
                            alt={`${alt ? alt : 'image' }`}
                        />
                    } */}
                    <div className="post__content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                    {tags && 
                        <div className="post__tags">
                            <span>Tagged in </span>
                            <div className="post__tags-wrapper">
                                {tags.map((tag, i) => (
                                    <a href={`/${tag}`} key={i} style={{ marginLeft: "1rem" }} >{tag}</a>
                                ))}
                            </div>
                        </div>
                    }
                    <PrevNext prev={prev && prev.node} next={next && next.node} />
                </div>
                <div className="sidebar">
                    <Share
                        title={title}
                        url={url}
                        pathname={props.location.pathname}
                    />
                </div>
            </div>
        </Layout>
    )
}


export default BlogPost

export const query = graphql`

query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        tags
        image 
       }
   }
   site {
    siteMetadata {
        siteUrl
      }
   }
}
`
// {
//     childImageSharp {
//         resize(width: 1000, height: 420) {
//           src
//         }
//         fluid(maxWidth: 900) {
//           ...GatsbyImageSharpFluid
//         }
//       }
// }