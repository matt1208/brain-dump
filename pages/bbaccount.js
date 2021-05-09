import ReleaseText from '@/components/blog/releasebrainblog';
import Footer1 from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AspectRatio, Box, Button, Center, Circle, Container, Divider, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';
import { useRouter } from 'next/router';


const AccountCenterRelease = () => {

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
                        <Heading size="xl" color={color}>Account Center</Heading>
                        <Text
                            mt={4}
                            color={color}
                        >
                            The account center now allows users to access key tools about their profile with BrainDUMP. To access the account center, click on the new Profile Icon in the right corner, and select Account. The Profile Icon also allows users to log out of their account at any time.
                         </Text>
                        <Text
                            mt={4}
                            color={color}
                        >
                            The account center contains options for users to contact BrainDUMP and to also control their data. If they have any feature requests or issues while using BrainDUMP they can either Request a Feature or Report a Bug. Both of these link to our Github Issues page so we can hear directly from you. Managing your data is also easier now, by filling out a simple form we can get in contact with you to discuss the next steps. If you sadly want to delete your account with BrainDUMP that option is also now available through the account center.
                         </Text>

                        <Center>
                            <Image src="/social_graphics/Account Center.png" alt="Account Center Social Graphic Annoucement" mt={8} width="500px" boxShadow="0px 5px 20px black" />
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
                        <Heading size="xl" color={color}>Account Center</Heading>
                        <Text
                            mt={4}
                            color={color}
                        >
                            The account center now allows users to access key tools about their profile with BrainDUMP. To access the account center, click on the new Profile Icon in the right corner, and select Account. The Profile Icon also allows users to log out of their account at any time.
                         </Text>
                        <Text
                            mt={4}
                            color={color}
                        >
                            The account center contains options for users to contact BrainDUMP and to also control their data. If they have any feature requests or issues while using BrainDUMP they can either Request a Feature or Report a Bug. Both of these link to our Github Issues page so we can hear directly from you. Managing your data is also easier now, by filling out a simple form we can get in contact with you to discuss the next steps. If you sadly want to delete your account with BrainDUMP that option is also now available through the account center.
                         </Text>
                        <Center>
                            <Image src="/social_graphics/Account Center.png" alt="Account Center Social Graphic Annoucement" mt={8} width="500px" boxShadow="0px 5px 20px black" />
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


export default AccountCenterRelease;