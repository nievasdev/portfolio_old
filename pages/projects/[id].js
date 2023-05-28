import { useRouter } from 'next/router';
import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta, WorkImage } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';

import meteor from '../../public/images/MeteorBrands.png'
import meteor2 from '../../public/images/MeteorProducts.png'
import meteor3 from '../../public/images/MeteorSales.png'
import meteor4 from '../../public/images/MeteorLogin.png'
import tailwinds from '../../public/images/TailwindHome.png'
import tailwinds2 from '../../public/images/TailwindPosts.png'

const images = {
    "meteor" : meteor,
    "meteor2" : meteor2,
    "meteor3" : meteor3,
    "meteor4" : meteor4,
    "tailwinds" : tailwinds,
    "tailwinds2" : tailwinds2
}

const content = require('./projects.json')

function SwitchElement(element) {
  switch (element.type) {
    case 'text':
      return <P> {element.value} </P>
    case 'list':
      return (
        <List ml={4} my={4}>
          {element.children.map(ListElement => {
            return <ListItem key={Math.random()}>{SwitchElement(ListElement)}</ListItem>
          })}
        </List>
      )
    case 'metadata':
      return (
        <>
          <Meta>{element.label}</Meta>
          {element.href ? (
            <Link href={`${element.href}`} target='_blank'>
              {element.span} <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            <span>{element.span}</span>
          )}
        </>
      )
    case 'image':
      return (
        <WorkImage src={images[element.link].src} alt={element.link} />
      )
  }
}

function Works() {
  const router = useRouter()
  const id = router.query.id;

  const workContent = content[id];

  let delay = 0.1;

  return (
    <Layout title={`${id}`}>
      <Container>
      <Section delay={delay} key={Math.random()} >
      <Title reference={'projects'}>
          {' '}
          {id.charAt(0).toUpperCase() + id.slice(1).replace("_"," ")}
        </Title>
        </Section>
        {workContent.map(element => {
          delay += 0.1;
          return <Section delay={delay} key={Math.random()} >{SwitchElement(element)}</Section>
        })}
      </Container>
    </Layout>
  )
}

export default Works
