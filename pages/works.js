import { Container, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article";
import novatech from "../public/images/novatech.png";
import hacknoid from "../public/images/hacknoid1.jpg";
import upshow from "../public/images/UPshow.png";
import gestionTotal from "../public/images/gestiontotal.png";

const Works = () => {
    return(
        <Layout>
            <Container>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="upshow" title="UP Show" thumbnail={upshow} reference={"works"} />
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="hacknoid" title="Hacknoid" thumbnail={hacknoid} reference={"works"} >
                            Automated IT security audit service 
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="gestion_total" title="Gestion Total" thumbnail={gestionTotal} reference={"works"} >
                            Business management software
                        </ WorkGridItem >
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="novatech" title="Novatech" thumbnail={novatech} reference={"works"}>
                            A web page for a Sftware Factory 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works