import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { Link } from 'react-scroll'
import {
  Container,
  Box,
  Stack,
  IconButton,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const buttonStyle = (activeSection, inactiveColor, section = 'index') => {
  const defaultButton = {
    padding: '5px',
    borderRadius: '5px',
    transition: 'transform 0.2s ease, opacity 0.2s ease'
  }

  if (activeSection === section) {
    defaultButton.backgroundColor = '#319795'
    defaultButton.color = '#202023'
    defaultButton.transform = 'scale(1.2)'
    defaultButton.opacity = 1
  } else {
    defaultButton.color = inactiveColor
    defaultButton.transform = 'scale(1)'
    defaultButton.opacity = 0.8
  }

  return defaultButton
}

const Navbar = ({ path }) => {
  const atHome = path === '/'
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const interval = setInterval(handleScroll, 500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleScroll = () => {
    const worksElement = document.getElementById('works')
    const projectElement = document.getElementById('project')
    const scrollPosition = window.scrollY

    const worksOffset =
      worksElement != null
        ? worksElement.getBoundingClientRect().top + window.scrollY - 10
        : 0
    const projectOffset =
      projectElement != null
        ? projectElement.getBoundingClientRect().top + window.scrollY - 10
        : 0

    if (scrollPosition < worksOffset) {
      setActiveSection('index')
    } else if (
      scrollPosition >= worksOffset &&
      scrollPosition < projectOffset
    ) {
      setActiveSection('works')
    } else {
      setActiveSection('project')
    }

    // Verificar si el scrollPosition está debajo del todo
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const documentHeight = document.documentElement.scrollHeight

    if (scrollPosition + windowHeight >= documentHeight) {
      setActiveSection('project')
    }
  }

  const inactiveColor = useColorModeValue('#000000', '#ffffff')

  return (
    <Box
      mt={4}
      position="fixed"
      as="nav"
      bg={isOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.7)'}
      zIndex={30}
      m={2}
      pt={2}
      pb={2}
      borderRadius="md"
      flexDirection={{ base: 'column', md: isOpen ? 'row' : 'column' }}
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
          {atHome ? (
            <>
              <button style={buttonStyle(activeSection, inactiveColor)}>
                <Link
                  to="index"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={0}
                  onSetActive={() => setActiveSection('index')}
                  onSetInactive={() => setActiveSection('')}
                >
                  Home
                </Link>
              </button>
              <button
                style={buttonStyle(activeSection, inactiveColor, 'works')}
              >
                <Link
                  to="works"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={0}
                  onSetActive={() => setActiveSection('works')}
                  onSetInactive={() => setActiveSection('')}
                >
                  Works
                </Link>
              </button>
              <button
                style={buttonStyle(activeSection, inactiveColor, 'project')}
              >
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={0}
                  onSetActive={() => setActiveSection('project')}
                  onSetInactive={() => setActiveSection('')}
                >
                  Projects
                </Link>
              </button>
            </>
          ) : (
            <button style={buttonStyle(activeSection, inactiveColor)}>
              <NextLink href={'/'}>Home</NextLink>
            </button>
          )}
        </Stack>
        <Box display={{ md: 'none' }} w={'100%'}>
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            m={1}
          />
          {isOpen && (
            <>
              <Box
                pos="fixed"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={9998}
                onClick={toggleMenu}
              />
              <Box
                pos="absolute"
                top="100%"
                left={0}
                w="100%"
                py={2}
                p={5}
                bg="rgba(0, 0, 0, 0.9)"
                boxShadow="md"
                zIndex={9999}
                borderRadius="md" // Agregar bordes redondeados al menú desplegable
              >
                <Stack
                  direction="column"
                  spacing={2}
                  align="center"
                  w={'100%'}
                  onClick={toggleMenu}
                >
                  {atHome ? (
                    <>
                      <Link
                        to="index"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={0}
                        onSetActive={() => setActiveSection('index')}
                        onSetInactive={() => setActiveSection('')}
                      >
                        Home
                      </Link>
                      <Link
                        to="works"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={0}
                        onSetActive={() => setActiveSection('works')}
                        onSetInactive={() => setActiveSection('')}
                      >
                        Works
                      </Link>
                      <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={0}
                        onSetActive={() => setActiveSection('project')}
                        onSetInactive={() => setActiveSection('')}
                      >
                        Projects
                      </Link>
                    </>
                  ) : (
                    <button style={buttonStyle(activeSection, inactiveColor)}>
                      <NextLink href={'/'}>Home</NextLink>
                    </button>
                  )}
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
