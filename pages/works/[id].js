import { useRouter } from 'next/router';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta, WorkImage } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';

import hacknoidImage from '../../public/images/hacknoid.png';
import upshowImage from '../../public/images/UPshow.png';
import gestionTotal from '../../public/images/gestiontotal.png';
import novatech from '../../public/images/novatech.png';
import novatech2 from '../../public/images/novatech2.png';
import novatech3 from '../../public/images/novatech3.png';

const images = {
    "hacknoid" : hacknoidImage,
    "upshow" : upshowImage,
    "gestiontotal" : gestionTotal,
    "novatech" : novatech,
    "novatech2" : novatech2,
    "novatech3" : novatech3
}

const content = require('./works.json')

function SwitchElement(element, id) {
  switch (element.type) {
    case 'year':
      return (
        <Title reference={'works'}>
          {' '}
          {id.charAt(0).toUpperCase() + id.slice(1).replace("_"," ")} <Badge> {element.value}</Badge>{' '}
        </Title>
      )
    case 'text':
      return <P> {element.value} </P>
    case 'list':
      return (
        <List ml={4} my={4}>
          {element.children.map(ListElement => {
            return <ListItem>{SwitchElement(ListElement)}</ListItem>
          })}
        </List>
      )
    case 'metadata':
      return (
        <>
          <Meta>{element.label}</Meta>
          {element.href ? (
            <Link href={`${element.href}`}>
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

  let delay = 0.0;

  return (
    <Layout title={`${id}`}>
      <Container>
        {workContent.map(element => {
          delay += 0.1;
          return <Section delay={delay} >{SwitchElement(element, id)}</Section>
        })}
      </Container>
    </Layout>
  )
}

export default Works
