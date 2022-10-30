import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Novatech <Badge>2022</Badge>
                </Title>
                <P>
                    A bla bla bla bla bla
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='www.google.com'>
                            Google <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataform</Meta>
                        <span>Windows/macOs/Linux/iOs</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>lalala, lalalal, lalalal</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogspot</Meta>
                        <Link href='www.google.com'>Holaaa</Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work