import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import novatechImage from '../../public/images/novatech.png'
import novatechImage2 from '../../public/images/novatech2.png'
import novatechImage3 from '../../public/images/novatech3.png'

const Work = () => {
    return (
        <Layout title="Novatech">
            <Container>
                <Title>
                    Novatech <Badge>2022</Badge>
                </Title>
                <P>
                The most difficult thing with this website was building the particles in the background. I needed to remake a specific solution for compatibility with the current React version.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.novatech.com.uy'>
                            Novatech <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Nodemailer, Tsparticles</span>
                    </ListItem>
                </List>
                <WorkImage src={novatechImage.src} alt="Novatech" />
                <WorkImage src={novatechImage2.src} alt="Novatech2" />
                <WorkImage src={novatechImage3.src} alt="Novatech3" />
            </Container>
        </Layout>
    )
}

export default Work