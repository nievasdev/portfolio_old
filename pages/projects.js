import { Container, SimpleGrid, Heading } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article";
import meteor from "../public/images/meteor.png";
import tailwind from "../public/images/tailwind.png";

const Projects = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}  variant="section-title">
                    Javascript
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="meteor" title="Meteor" thumbnail={meteor} reference={"projects"}>
                            A website intended for stock management. 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="tailwinds" title="Tailwinds" thumbnail={tailwind} reference={"projects"}>
                            News website. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects