import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import image1 from '../../public/images/MeteorBrands.png'
import image2 from '../../public/images/MeteorProducts.png'
import image3 from '../../public/images/MeteorSales.png'
import image4 from '../../public/images/MeteorLogin.png'

const Project = () => {
    return (
        <Layout title="Flask">
            <Container>
                <Title reference={"projects"}>
                    Flask
                </Title>
                <P>
                Flask is a Python web framework that allows developers to quickly and easily create web applications. Flask is considered a micro-framework, which means that it is designed to be lightweight and flexible, and does not include unnecessary additional components. Flask provides the basic tools for creating web applications, such as URL routing, cookie management, support for Jinja2 templates, and more. Although Flask is considered a beginner-level framework, it is highly scalable and extensible, and is used by developers of all levels of experience to create web applications from simple to complex.
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
                        <span>Flask, Jinja2, Postgres, Python</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project