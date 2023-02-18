import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import image1 from '../../public/images/MeteorBrands.png'
import image2 from '../../public/images/MeteorProducts.png'
import image3 from '../../public/images/MeteorSales.png'
import image4 from '../../public/images/MeteorLogin.png'

const Work = () => {
    return (
        <Layout title="Novatech">
            <Container>
                <Title>
                    Meteor
                </Title>
                <P>
                    Meteor is an open-source web and mobile development platform that uses JavaScript on both the client and server sides, with a real-time data system and a wide range of open-source packages and libraries to facilitate integration with other web technologies and services.
                </P>
                <br/>
                <P>
                This website is intended for stock management in a store, which allows control of the database of product brands, types, quantities, and sales history, all in a MongoDB database.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href='https://github.com/Mauro-js/Meteor_practices' target='_blank'>
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Meteor, React, MongoDB</span>
                    </ListItem>
                </List>
                <WorkImage src={image1.src} alt="Meteor" />
                <WorkImage src={image2.src} alt="Meteor2" />
                <WorkImage src={image3.src} alt="Meteor3" />
                <WorkImage src={image4.src} alt="Meteor4" />
            </Container>
        </Layout>
    )
}

export default Work