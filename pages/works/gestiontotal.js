import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import gestionTotal from '../../public/images/gestiontotal.png';
import Section from '../../components/section'

const Work = () => {
    return (
        <Layout title="Novatech">
            <Container>
                <Section delay={0.1}>
                    <Title reference={"works"}>
                        Gestion Total <Badge>2017</Badge>
                    </Title>
                </Section>
                <Section delay={0.2}>
                    <P>
                        The primary product offered by this company is an ERPnext system for internal administration, utilizing a backend built with Python and a frontend developed in JavaScript. Additionally, the system includes an API created using PHP.

                        The technical challenges faced revolve primarily around mathematical complexities within the code, with a focus on optimizing the response time for each database query.
                    </P>
                </Section>
                <Section delay={0.3}>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Plataform</Meta>
                            <span>Web</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Python, Javascript</span>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.4}>
                    <WorkImage src={gestionTotal.src} alt="Gestion Total" />
                </Section>
            </Container>
        </Layout>
    )
}

export default Work