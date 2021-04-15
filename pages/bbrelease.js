import ReleaseText from '@/components/blog/releasebrainblog';
import Footer1 from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AspectRatio, Box, Button, Center, Circle, Container, Divider, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';
import { useRouter } from 'next/router';


const ReleaseBrainBlog = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");
    const [isLargerThan1075] = useMediaQuery("(max-width: 1075px)");
    const router = useRouter()


    return (
        <>
            <Head>
                <title>Brain Blog</title>
            </Head>

            <Flex flexDirection="column">
                <NavBar />
                <br></br>
                {isLargerThan1075 ? (
                    <Flex
                        flexDirection="column"
                        maxWidth="700px"
                        width="100%"
                        px={8}
                        ml="auto"
                        mr="auto"
                    >
                        <Heading size="2xl" color={color} style={{ cursor: "pointer" }} onClick={() => router.push('/brainblog')}>Brain Blog</Heading>


                        <br></br><br></br>

                        <Text color={color} fontWeight="bold">Update</Text>
                        <Heading size="xl" color={color}>Release of Brain Blog</Heading>
                        <br></br>
                        <ReleaseText />

                    </Flex>
                ) : (
                    <Flex
                        flexDirection="column"
                        maxWidth="1000px"
                        width="100%"
                        ml="auto"
                        mr="auto"
                    >
                        <Heading size="2xl" color={color} style={{ cursor: "pointer" }} onClick={() => router.push('/brainblog')}>Brain Blog</Heading>

                        <br></br><br></br>

                        <Text color={color} fontWeight="bold">Update</Text>
                        <Heading size="xl" color={color}>Release of Brain Blog</Heading>
                        <br></br>
                        <ReleaseText />

                    </Flex>
                )
                }

            </Flex>


            {/* <Flex flexDirection="column">
                <Footer1 />
            </Flex> */}
        </>
    )
}


export default ReleaseBrainBlog;
