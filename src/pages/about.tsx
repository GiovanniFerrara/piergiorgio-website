import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import Img from 'gatsby-image'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <StaticQuery query={
      graphql`
      query {
        images: allFile(filter: {name: {eq: "white3"}}) {
        nodes {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }`}
    render={data =>{
      return (
    <Layout>
      <SEO title="About | Piergiorgio" desc="Contact me" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Piergiorgio</h1>
        <p>
          I'm an Italian boy with a passion for sports, wines, food and good style.
        </p>
        <p>
          At this stage I'm looking for a new experience in my life in the world of fashion as a male model.
        </p>
        <p>
          Here you can find the contact information of my manager and friend, Giovanni Ferrara:
        </p>
        <p>
          <b>gianmarco.ferrara@gmail.com</b>
        </p>
        <p>
          Let's keep in touch!
        </p>
        <Img fluid={data.images.nodes[0].childImageSharp.fluid} />

      </AnimatedBox>
    </Layout>
      )
    }} />
  )
}


export default About
