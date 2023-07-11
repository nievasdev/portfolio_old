import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostSection, PostLabel } from '../components/post'
import { Highlighted } from '../components/text'
import ReactTypingEffect from 'react-typing-effect'

import novatech from '../public/images/novatech.png'
import hacknoid from '../public/images/hacknoid1.jpg'
import upshow from '../public/images/UPshow.png'
import gestionTotal from '../public/images/gestiontotal.png'

const Page = () => {
  return (
    <>
      <Layout>
        <Container mt={-10} mb={100}>
          <Section delay={0.1}>
            <Box
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              p={2}
              mb={10}
              align="center"
              boxShadow="xl"
            >
              <ReactTypingEffect
                text={[
                  `Hello Word!, I'm a full-stack developer based in Uruguay!`
                ]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                eraseDelay={160000}
                speed={90}
                displayTextRenderer={text => {
                  return (
                    <h1>
                      {text.split('').map((char, i) => {
                        const key = `${i}`
                        return <span key={key}>{char}</span>
                      })}
                    </h1>
                  )
                }}
              />
            </Box>
            <Box display={{ md: 'flex' }}>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  Mauro Nievas
                </Heading>
                <p>Full-stack developer</p>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
              >
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="140px"
                  display="inline-block"
                  src={`images/logo${useColorModeValue('', '-dark')}.png`}
                  alt="Profile Image"
                  boxShadow="dark-lg"
                />
              </Box>
            </Box>
          </Section>
          <Section delay={0.4}>
            <Heading variant="section-title">Me</Heading>
            <p className="paragraph">
              As a highly motivated and young computer enthusiast, I have a
              strong passion for programming and have been self-taught since the
              age of 12. Currently, I am pursuing a degree in computer
              engineering, which has further deepened my knowledge and skills in
              the field. With over 6 years of experience working with JavaScript
              and Python, I have a proven track record of successfully
              developing both backend and frontend applications. I am eager to
              bring my expertise and passion to a new challenge, where I can
              continue to grow as a developer and make a meaningful contribution
              to the company.
            </p>
            <Box align="center" my={12}>
              <NextLink href="/works">
                <Button colorScheme="teal">
                  My porfolio <ChevronRightIcon />
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.8}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <PostSection>
              <PostLabel>2022 - present</PostLabel>
              Worked at <Highlighted>Antel</Highlighted> - <i>Web developer</i>
            </PostSection>
            <PostSection>
              <PostLabel>2021 - 2022</PostLabel>
              Worked at <Highlighted>Up show</Highlighted> -{' '}
              <i>Web developer</i>
            </PostSection>
            <PostSection>
              <PostLabel>2018 - 2021</PostLabel>
              Worked at <Highlighted>Hacknoid</Highlighted> -{' '}
              <i>sSr developer</i>
            </PostSection>
            <PostSection>
              <PostLabel>2017 - 2018</PostLabel>
              Worked at <Highlighted>Gestion Total</Highlighted> -{' '}
              <i>Jr developer</i>
            </PostSection>
            <PostSection>
              <PostLabel>1996</PostLabel>
              Born in Mercedes, Uruguay.
            </PostSection>
          </Section>
        </Container>
      </Layout>

      <Layout>
        <Container>
          <Section delay={0.1}>
            <Heading as="h3" fontSize={20} mb={4} variant="section-title">
              Works
            </Heading>
          </Section>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.1}>
              <WorkGridItem
                id="upshow"
                title="UP Show"
                thumbnail={upshow}
                reference={'works'}
              />
            </Section>
            <Section delay={0.2}>
              <WorkGridItem
                id="hacknoid"
                title="Hacknoid"
                thumbnail={hacknoid}
                reference={'works'}
              >
                Automated IT security audit service
              </WorkGridItem>
            </Section>
            <Section delay={0.3}>
              <WorkGridItem
                id="gestion_total"
                title="Gestion Total"
                thumbnail={gestionTotal}
                reference={'works'}
              >
                Business management software
              </WorkGridItem>
            </Section>
            <Section delay={0.4}>
              <WorkGridItem
                id="novatech"
                title="Novatech"
                thumbnail={novatech}
                reference={'works'}
              >
                A web page for a Sftware Factory
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  )
}

export default Page
