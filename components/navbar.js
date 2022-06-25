import Logo from './logo';
import NextLink from 'next/link';
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
} from '@chakra-ui/react';
import { HumurgerIcon } from '@chakra-ui/icons';

const LinkItems = ({href, path, children}) => {
    const active =  path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteApha.900');  

    return (
        <NextLink href={href}>
            <Link 
                p={2} 
                bg={active ? 'grassTeal' : undefined }
                color={active ? '#202023' : inactiveColor}>
                {children}         
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
     const { path } = props;

     return <Box 
                position="fixed"
                as="nav"
                w="100%"
                bg={useColorModeValue('#ffffff40', '#20202380')}
                style={{backdropFilter : 'blur(10px'}}
                zIndex={1}
                {...props}
                >
                <Container 
                    display="flex" 
                    p={2} 
                    maxW="container.md" 
                    wrap="wrap" 
                    align="center" 
                    justify="space-between">
                        <Flex align='center' mr={5}>
                            <Heading
                                as="h1"
                                size="lg"
                                letterSpacing={'tighter'}
                            >
                                <Logo/>
                            </Heading>
                        </Flex>
                        <Stack
                            direction={{base:'column', md:'row'}}
                            display={{base:'none', md:'flex'}}
                            width={{base:'full', md:'auto'}}
                            alignItems="center"
                            flexGrow={1}
                            mt={{base:4,nmd:0}}
                        >
                            <LinkItems href="/works" path={path}>
                                Works
                            </LinkItems>
                            <LinkItems href="/posts" path={path}>
                                Posts
                            </LinkItems>
                        </Stack>
                </Container>
            </Box>
}

export default Navbar