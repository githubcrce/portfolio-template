import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Background from "../components/Background"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Your Name" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Background></Background>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
