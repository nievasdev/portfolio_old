import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article";
import thumbInkdrop from "../public/images/mauro.jpeg";
import novatech from "../public/images/novatech.png"

const Works = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="novatech" title="Novatech" thumbnail={novatech}>
                            A web page for a Sftware Factory 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walkdrop" title="walkdrop" thumbnail={thumbInkdrop}>
                            A markdown note-talking app with 100+ encrypted data sync support
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works