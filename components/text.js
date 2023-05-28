import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Title = ({ children, reference }) => (
  <Box>
    <NextLink href={`/${reference}`}>
      <Link>{reference}</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

const Highlighted = ({ children }) => (
  <Badge
    colorScheme="green"
    mr={2}
    style={{ display: 'inline', fontSize: 'small' }}
  >
    <b>{children}</b>
  </Badge>
)

module.exports = {
  Title,
  WorkImage,
  Highlighted
}
