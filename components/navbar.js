import React, { useState } from 'react'
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
        borderRadius="md" // Agregar bordes redondeados
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const inactiveColor = useColorModeValue('gray200', 'whiteApha.900')

  return (
    <Box
      mt={4}
      position="fixed"
      as="nav"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={1}
      borderRadius="md" // Agregar bordes redondeados al campo que engloba a todos
    >
      <Container
        display="flex"
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Stack
          direction="column"
          mt={4}
          spacing={2}
          align="center"
          display={{ base: 'none', md: 'flex' }}
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
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
          />
          {isOpen && (
            <>
              <Box
                pos="fixed"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.6)"
                zIndex={9998}
                onClick={toggleMenu}
              />
              <Box
                pos="absolute"
                top="100%"
                left={0}
                w="100%"
                py={2}
                bg={useColorModeValue('white', 'gray800')}
                boxShadow="md"
                zIndex={9999}
                borderRadius="md" // Agregar bordes redondeados al menú desplegable
              >
                <Stack
                  direction="column"
                  spacing={2}
                  align="center"
                  onClick={toggleMenu}
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
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
