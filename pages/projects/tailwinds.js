import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import image1 from '../../public/images/TailwindHome.png'
import image2 from '../../public/images/TailwindPosts.png'

const Project = () => {
    return (
        <Layout title="Tailwinds">
            <Container>
                <Title reference={"projects"}>
                    Tailwind
                </Title>
                <P>
                Tailwind CSS is an open-source UI design framework for the quick and easy creation of custom designs for websites and web applications. The focus of Tailwind CSS is to provide a large number of pre-built and highly configurable utility classes that can be applied directly in HTML to design web pages without having to write custom CSS. This makes it easy to create highly customized and responsive designs, resulting in a smoother and enhanced user experience. Additionally, Tailwind CSS also includes a range of useful development tools and features, such as a default color palette, tools for creating shadows, animation effects, and more.
                </P>
                <br/>
                <P>
                This is a news website, created with Next.js, with the addition of a cache for cases where the user has poor network connectivity.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>
                            Website
                        </Meta>
                        <Link href="https://mauroapp.netlify.app/">
                         Tailwind <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href='https://github.com/Mauro-js/tailwind' target='_blank'>
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, React, Tailwind</span>
                    </ListItem>
                </List>
                <WorkImage src={image1.src} alt="Meteor" />
                <WorkImage src={image2.src} alt="Meteor2" />
            </Container>
        </Layout>
    )
}

export default Project