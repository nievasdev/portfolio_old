import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItems = ({ href, children }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  const inactiveColor = useColorModeValue('gray200', 'whiteApha.900')

  return (
    <Box
      as="button"
      p={2}
      bg={router.pathname === href ? 'grassTeal' : undefined}
      color={router.pathname === href ? '#202023' : inactiveColor}
      borderRadius="md" // Agregar bordes redondeados
      onClick={handleClick}
    >
      {children}
    </Box>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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
          <LinkItems href="/">Home</LinkItems>
          <LinkItems href="/works">Works</LinkItems>
          <LinkItems href="/projects">Projects</LinkItems>
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
                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic fuera de él
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
                  onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
                >
                  <ThemeToggleButton />
                  <LinkItems href="/">Home</LinkItems>
                  <LinkItems href="/works">Works</LinkItems>
                  <LinkItems href="/projects">Projects</LinkItems>
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
