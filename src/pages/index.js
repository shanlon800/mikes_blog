import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )
// export default IndexPage;

class MikesBlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hello There!</h1>
      </Layout>
    )
  }
} 

export default MikesBlogIndex

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] order:DESC }) {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
          content
        }
      }
    }
  }
`
