import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import Fonts from "../components/fonts";
import theme from '../libs/theme';
import { AnimatePresence } from "framer-motion";
import "../public/global.css";
import MatrixRain from '../components/matrixRain'
import { useState } from "react";


const Website = ({ Component, pageProps, router}) => {

    const [showed, setShowed] = useState(false);

    let timeoutId;
    const onTimeout = async () => {
      clearTimeout(timeoutId);
      setShowed(true);

    };

    timeoutId = setTimeout(onTimeout, 3970);

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <MatrixRain />
            {
                !showed ?
                <div className="loadingContent">
                    <img src={`images/loading.gif`} className={"loading"} />
                </div> :
                <Layout router={router}>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.rute} />
                    </AnimatePresence>
                </Layout>
            }
        </ChakraProvider>
    )  
}

export default Website; 