import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Works from '../components/works'
import Projects from '../components/projects'
import Home from '../components/home'

const Page = () => {
  return (
    <>
      <Layout>
        <Container pt={10} mt={-10} mb={100} id="index">
          <Home />
        </Container>
      </Layout>

      <Layout>
        <Container id="works" mb={100}>
          <Section delay={0.1}>
            <Heading as="h3" fontSize={20} mb={10} variant="section-title">
              Works
            </Heading>
          </Section>
          <Works />
        </Container>
      </Layout>

      <Layout>
        <Container mt={-10} mb={100} id="project">
          <Section delay={0.1}>
            <Heading as="h3" fontSize={20} mb={10} variant="section-title">
              Projects
            </Heading>
          </Section>
          <Projects />
        </Container>
      </Layout>
    </>
  )
}

export default Page
