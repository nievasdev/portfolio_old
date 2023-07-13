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
            src={`images/loading2.gif`}
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
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                  }}
                >
                  <Image
                    borderRadius="lg"
                    src={`images/office2Low.jpg`}
                    alt="office"
                    objectFit="cover"
                    objectPosition="center"
                    width="100%"
                    height="100%"
                    opacity={0.7}
                  />
                </div>

                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    backdropFilter: 'blur(5px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: '10px'
                  }}
                >
                  <Component {...pageProps} key={router.rute} />
                </div>
              </div>
            </AnimatePresence>
          </Layout>
          <Footer />
        </>
      )}
    </ChakraProvider>
  )
}

export default Website

/* <Image
            borderRadius="lg"
            src={`images/loading.gif`}
            className={'loading'}
            loading="once"
            alt="loading"
            style={{ zIndex: 1 }}
          />*/
