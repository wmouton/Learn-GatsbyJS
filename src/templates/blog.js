import React from 'react'
// imports from gatsby
import { graphql } from 'gatsby'
// import components
import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

// blog functional component
const Blog = ({ data }) => {
  return (
    <div>
      <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
      </Layout>
    </div>
  )
}

export default Blog
