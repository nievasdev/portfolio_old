import { ChakraProvider, Flex, Image, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../components/theme'
import { AnimatePresence } from 'framer-motion'
import '../public/global.css'
import { useState } from 'react'
import Navbar from '../components/navbar'

import { IoLogoGithub } from 'react-icons/io5'
import NextLink from 'next/link'

const Website = ({ Component, pageProps, router }) => {
  const [showed, setShowed] = useState(false)

  let timeoutId
  const onTimeout = async () => {
    clearTimeout(timeoutId)
    setShowed(true)
  }

  timeoutId = setTimeout(onTimeout, 3900)

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {!showed ? (
        <div className="loadingContent">
          <Image
            borderRadius="lg"
            src={`images/loading.gif`}
            className={'loading'}
            loading="once"
          />
        </div>
      ) : (
        <>
          <Flex justify="flex-start">
            <Navbar path={router.asPath} />
          </Flex>
          <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.rute} />
            </AnimatePresence>
          </Layout>
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
        </>
      )}
    </ChakraProvider>
  )
}

export default Website
