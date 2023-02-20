import { Container, SimpleGrid, Heading } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article";
import meteor from "../public/images/meteor.png";
import tailwind from "../public/images/tailwind.png";
import flask from "../public/images/flask.png";


const Projects = () => {
    return(
        <Layout>
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={20} mb={4}  variant="section-title">
                        Javascript
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="meteor" title="Meteor" thumbnail={meteor} reference={"projects"}>
                            A website intended for stock management. 
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="tailwinds" title="Tailwind" thumbnail={tailwind} reference={"projects"}>
                            News website. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.4}>
                    <Heading as="h3" fontSize={20} mb={4}  variant="section-title">
                        Python
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6} >
                    <Section delay={0.5}>
                        <WorkGridItem id="flask" title="Flask" thumbnail={flask} reference={"projects"}>
                            Web page for the voting of a physics teachers' association president. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects