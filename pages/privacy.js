import AboutList from '@/components/AboutList';
import Footer1 from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PrivacyLabel from '@/components/privacylabel';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AspectRatio, Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';


const Privacy = () => {

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
                <title>BrainDUMP | Privacy</title>
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
                        <Heading size="2xl" color={color}>Privacy</Heading>
                        <br></br>
                        {/* <Text fontSize="xl" color={color} fontWeight="semibold" fontStyle="italic">BrainDUMP believes privacy is a top priority. BrainDUMP is working hard to implement security and privacy steps to protect your thoughts. Please be aware that BrainDUMP is in a beta period and security mesaures are still being rolled out.</Text> */}
                        <PrivacyLabel />
                        <br></br>
                        <Heading size="lg" color={color}>The Breakdown</Heading>
                        <br></br>

                        <AspectRatio maxW="600px" ratio={1}>
                            <iframe src="privacypolicy.pdf#toolbar=0&#page=1&zoom=70" allowFullScreen />
                        </AspectRatio>

                        <br></br>

                    </Flex>
                ) : (
                    <Flex
                        flexDirection="column"
                        maxWidth="1000px"
                        width="100%"
                        ml="auto"
                        mr="auto"
                    >
                        <Heading size="2xl" color={color}>Privacy</Heading>
                        <br></br>
                        {/* <Text fontSize="xl" color={color} fontWeight="semibold" fontStyle="italic">BrainDUMP believes privacy is a top priority. BrainDUMP is working hard to implement security and privacy steps to protect your thoughts. Please be aware that BrainDUMP is in a beta period and security mesaures are still being rolled out.</Text> */}
                        <PrivacyLabel />
                        <br></br>
                        <Heading size="lg" color={color}>The Breakdown</Heading>
                        <br></br>

                        <AspectRatio maxW="1000px" ratio={1}>
                            <iframe src="privacypolicy.pdf#toolbar=0&#page=1&zoom=70" allowFullScreen />
                        </AspectRatio>

                        <br></br>


                    </Flex>
                )
                }

            </Flex>

            <Flex flexDirection="column">
                <Footer1 />
            </Flex>
        </>
    )
}


export default Privacy;
