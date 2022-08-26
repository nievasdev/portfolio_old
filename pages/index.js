import NextLink from 'next/link'
import { 
    Container, 
    Box,
    Link,
    Heading, 
    Image,
    Button,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return  <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center" >
                    Hello I&apos;m a full-stack developer based in Uruguay!
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" >
                             Mauro Nievas
                        </Heading>
                        <p>Full-stack developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/mauro.jpeg" 
                            alt="Profile Image"
                            />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>As a young computing enthusiast, I studied programming in a 
                        selft-taught way since I was 12 years old,
                        I am currently studying computer engineering and I have experience with
                        various technologies, I've been with Javascript and Python for almost 5
                        years, and I have developed for both backend and frontend,
                        I am looking for new technological challenges to grow as a developer &nbsp;
                        <NextLink href="/work/inkdrop"><Link>Inkdrop</Link></NextLink>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button righIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My porfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in Mercedes, Uruguay.
                    </BioSection>
                </Section>
            </Container> 
}

export default Page 