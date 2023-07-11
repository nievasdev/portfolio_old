import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import {
  Container,
  Box,
  Stack,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const buttonStyle = (activeSection, inactiveColor, section = 'index') => {
  const defaultButton = {
    padding: '5px',
    borderRadius: '5px'
  }

  if (activeSection === section) {
    defaultButton.backgroundColor = '#319795'
    defaultButton.color = '#202023'
  } else {
    defaultButton.color = inactiveColor
  }

  return defaultButton
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const backgroundColor = useColorModeValue('white', 'gray800');

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
      worksElement.getBoundingClientRect().top + window.scrollY - 10
    const projectOffset =
      projectElement.getBoundingClientRect().top + window.scrollY - 10

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
  }

  const inactiveColor = useColorModeValue('#000000', '#ffffff')

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
          <button style={buttonStyle(activeSection, inactiveColor, 'works')}>
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
          <button style={buttonStyle(activeSection, inactiveColor, 'project')}>
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
                bg={backgroundColor}
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
