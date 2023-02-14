import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import hacknoidImage from '../../public/images/hacknoid.png'
const Work = () => {
    return (
        <Layout title="Novatech">
            <Container>
                <Title>
                    Hacknoid <Badge>2018 to 2021</Badge>
                </Title>
                <P>
                I began my employment at Hacknoid in June and started as a Junior role. Over time, I gained a comprehensive understanding of the entire company structure, including both backend and frontend systems.

                The backend at Hacknoid was built using Python and Django, and the frontend was migrated from PHP to React, a process that took approximately one and a half years to complete.

                During my time at this company, I accumulated 3 years of experience in Javascript, Python, and Mysql, as well as a minimal amount of exposure to PHP and React.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.hacknoid.com/'>
                            Hacknoid <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Javascript, NextJS, React</span>
                    </ListItem>
                </List>
                <WorkImage src={hacknoidImage.src} alt="Hacknoid" />
            </Container>
        </Layout>
    )
}

export default Work