import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItems = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteApha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  const inactiveColor = useColorModeValue('gray200', 'whiteApha.900')

  return (
    <Box
      position="fixed"
      as="nav"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center" // Centrar horizontalmente los elementos del navbar
      >
        <Stack
          direction="column"
          mt={4}
          spacing={2} // Espaciado entre elementos del stack
          align="center" // Centrar horizontalmente los elementos del stack
        >
          <ThemeToggleButton />
          <LinkItems href="/" path={path}>
            Home
          </LinkItems>
          <LinkItems href="/works" path={path}>
            Works
          </LinkItems>
          <LinkItems href="/projects" path={path}>
            Projects
          </LinkItems>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
