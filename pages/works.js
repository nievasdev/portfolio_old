import { Container, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article";
import novatech from "../public/images/novatech.png";
import hacknoid from "../public/images/hacknoid1.jpg";
import upshow from "../public/images/UPshow.png";

const Works = () => {
    return(
        <Layout>
            <Container>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="upshow" title="UP Show" thumbnail={upshow} />
                    </Section>
                    <Section>
                        <WorkGridItem id="hacknoid" title="Hacknoid" thumbnail={hacknoid}>
                            Automated IT security audit service 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="novatech" title="Novatech" thumbnail={novatech}>
                            A web page for a Sftware Factory 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works