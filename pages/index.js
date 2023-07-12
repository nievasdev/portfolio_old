import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Works from '../components/works'
import Projects from '../components/projects'
import Home from '../components/home'

const Page = () => {
  return (
    <>
      <Layout maxW="container.lg">
        <Container pt={10} mt={-10} mb={100} maxW="container.md" id="index">
          <Home />
        </Container>
      </Layout>

      <Layout>
        <Container id="works" pt={10} mt={-10} mb={100} maxW="container.md">
          <Section delay={0.1}>
            <Box
              position="relative"
              left="50%"
              transform="translateX(-50%)"
              w={'100%'}
              h={'40px'}
              pt={-10}
              textAlign={'center'}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <Heading fontSize={25} mb={80}>
                Works
              </Heading>
            </Box>
          </Section>
          <Works />
        </Container>
      </Layout>

      <Layout>
        <Container pt={10} mt={-10} pb={100} maxW="container.md" id="project">
          <Section delay={0.1}>
            <Box
              position="relative"
              left="50%"
              transform="translateX(-50%)"
              w={'100%'}
              h={'40px'}
              textAlign={'center'}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <Heading fontSize={25} pb={80}>
                Projects
              </Heading>
            </Box>
            <br />
          </Section>
          <Projects />
        </Container>
      </Layout>
    </>
  )
}

export default Page
