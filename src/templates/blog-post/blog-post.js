import React from 'react';
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import PrevNext from '../../components/prevnext/prevnext'
// import MetaTags from '../components/Metatags'
import Share from '../../components/share/share'
import './blog-post.scss'

function BlogPost(props) {
    const url = props.data.site.siteMetadata.siteUrl
    // const thumbnail = props.data.markdownRemark.frontmatter.image &&
    //       props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    const { title, image, tags } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
        <Layout>
            {/* <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                // thumbnail={thumbnail && url + thumbnail}
                // url={url}
                pathname={props.location.pathname}
            /> */}
            <div className="post">
                <h1>{title}</h1>
                {image && <img src={require(`../../assets/images/${image}`)} />}
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                <div className="post__tags">
                    <span>Tagged in </span>
                    {tags.map((tag, i) => (
                        <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }} >{tag}</a>
                    ))}
                </div>
                <Share 
                    title={title} 
                    url={url} 
                    pathname={props.location.pathname} 
                />  
                <PrevNext prev={prev && prev.node} next={next && next.node} />
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