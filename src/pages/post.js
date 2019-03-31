import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Post = (props) => (
    <Layout>
      <SEO title="post" />
      <h1>BlogPost Page</h1>
      <p>Welcome to the post</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export default Post;
  
  export const pageQuery = graphql `
  query {
    allWordpressPost(filter: {wordpress_id: {eq: 10}}) {
        edges {
          node {
            id
            slug
            wordpress_id
            categories {
              id
            }
            content
          }
        }
      }  
  }
  `