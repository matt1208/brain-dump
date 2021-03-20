import AboutList from '@/components/AboutList';
import NavBar from '@/components/NavBar';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';


const About = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");
    const [isLargerThan1075] = useMediaQuery("(max-width: 1075px)");

    return (
        <>
            <Head>
                <title>Brain Dump</title>
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
                        <Heading size="2xl" color={color}>About</Heading>
                        <br></br>
                        <Text fontSize="xl" color={color} fontWeight="semibold" fontStyle="italic">BrainDUMP allows you to store all of your imporant thoughts in one place. Whether you need to quickly write down a new project idea or the next random thought that pops into your head.</Text>
                        <br></br>
                        <Heading size="lg" color={color}>The Breakdown</Heading>
                        <br></br>

                        <AboutList />

                    </Flex>
                ) : (
                    <Flex
                        flexDirection="column"
                        maxWidth="1000px"
                        width="100%"
                        ml="auto"
                        mr="auto"
                    >
                        <Heading size="2xl" color={color}>About</Heading>
                        <br></br>
                        <Text fontSize="xl" color={color} fontWeight="semibold" fontStyle="italic">BrainDUMP allows you to store all of your imporant thoughts in one place. Whether you need to quickly write down a new project idea or the next random thought that pops into your head.</Text>
                        <br></br>
                        <Heading size="lg" color={color}>The Breakdown</Heading>
                        <br></br>
                        <AboutList />

                    </Flex>
                )
                }

            </Flex>


        </>
    )
}


export default About;
