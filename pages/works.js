import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"

import thumbInkdrop from "../public/images/mauro.jpeg";

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-talking app with 100+ encrypted data sync support
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="walkdrop" title="walkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-talking app with 100+ encrypted data sync support
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works