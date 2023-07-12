import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <Flex
      as="footer"
      h="50px"
      position="fixed"
      bottom="0"
      right="10" // Alinear el footer a la derecha
      justifyContent="center" // Alinear elementos en el centro horizontalmente
      alignItems="center" // Alinear elementos en el centro verticalmente
    >
      <NextLink href="https://github.com/Mauro-js/portfolio">
        <Link
          href="https://github.com/Mauro-js/portfolio"
          target="_blank"
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IoLogoGithub />
          <span style={{ marginLeft: '0.5rem' }}>Source</span>
        </Link>
      </NextLink>
    </Flex>
  )
}

export default Footer
