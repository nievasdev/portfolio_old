import {
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from './section'
import { PostSection, PostLabel } from './post'
import { Highlighted } from './text'
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
  return (
    <>
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
            text={[`Hello Word!, I'm a full-stack developer based in Uruguay!`]}
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
          As a highly motivated and young computer enthusiast, I have a strong
          passion for programming and have been self-taught since the age of 12.
          Currently, I am pursuing a degree in computer engineering, which has
          further deepened my knowledge and skills in the field. With over 6
          years of experience working with JavaScript and Python, I have a
          proven track record of successfully developing both backend and
          frontend applications. I am eager to bring my expertise and passion to
          a new challenge.
        </p>
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
          Worked at <Highlighted>Up show</Highlighted> - <i>Web developer</i>
        </PostSection>
        <PostSection>
          <PostLabel>2018 - 2021</PostLabel>
          Worked at <Highlighted>Hacknoid</Highlighted> - <i>sSr developer</i>
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
    </>
  )
}

export default Home
