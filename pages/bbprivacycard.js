import ReleaseText from '@/components/blog/releasebrainblog';
import Footer1 from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AspectRatio, Box, Button, Center, Circle, Container, Divider, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';
import { useRouter } from 'next/router';


const PrivacyCardBB = () => {

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
                        <Heading size="xl" color={color}>Privacy Card</Heading>

                        <br></br>
                        <Text
                            color={color}
                            borderLeft="3px solid"
                            borderColor={btnbg}
                            pl={4}
                            // fontWeight="bold"
                            fontSize="lg"
                        >
                            Privacy is a top priority for BrainDUMP and it is important to know in simple terms exactly which information of yours BrainDUMP has.             </Text>


                        <Text
                            mt={4}
                            color={color}
                        >
                            The new Privacy Card provides all the data that is stored when you use BrainDUMP. In a simple layout you can now see that your Name, Email, and Social Provider is the only information that is stored in our database. The Privacy Card also explains to you some of the things BrainDUMP does with your data, so that way all of our users are aware of our practices. No longer do you need to read through lengthy confusing documents to figure out exactly what personal details you are giving up - the Privacy Card shows you exactly what you need in a simple layout.
                        </Text>

                        <Center>
                            <Image src="/social_graphics/Privacy Card.png" alt="Privacy Card Social Graphic Annoucement" mt={8} mb={8} width="500px" boxShadow="0px 5px 20px black" />
                        </Center>
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
                        <Heading size="xl" color={color}>Privacy Card</Heading>
                        <br></br>
                        <Text
                            color={color}
                            borderLeft="3px solid"
                            borderColor={btnbg}
                            pl={4}
                            // fontWeight="bold"
                            fontSize="lg"
                        >
                            Privacy is a top priority for BrainDUMP and it is important to know in simple terms exactly which information of yours BrainDUMP has.
                         </Text>


                        <Text
                            mt={4}
                            color={color}
                        >
                            The new Privacy Card provides all the data that is stored when you use BrainDUMP. In a simple layout you can now see that your Name, Email, and Social Provider is the only information that is stored in our database. The Privacy Card also explains to you some of the things BrainDUMP does with your data, so that way all of our users are aware of our practices. No longer do you need to read through lengthy confusing documents to figure out exactly what personal details you are giving up - the Privacy Card shows you exactly what you need in a simple layout.
                        </Text>


                        <Center>
                            <Image src="/social_graphics/Privacy Card.png" alt="Privacy Card Social Graphic Annoucement" mt={8} mb={8} width="500px" boxShadow="0px 5px 20px black" />
                        </Center>
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


export default PrivacyCardBB;