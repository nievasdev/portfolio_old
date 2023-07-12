import { ChakraProvider, Flex, Image } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../components/theme'
import { AnimatePresence } from 'framer-motion'
import '../public/global.css'
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Website = ({ Component, pageProps, router }) => {
  const [showed, setShowed] = useState(false)

  let timeoutId
  const onTimeout = async () => {
    clearTimeout(timeoutId)
    setShowed(true)
  }

  timeoutId = setTimeout(onTimeout, 3900)

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Enter') {
        setShowed(true)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

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
            alt="loading"
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
          <Footer />
        </>
      )}
    </ChakraProvider>
  )
}

export default Website
