import NavBar from '@/components/NavBar';
import { useAuth } from '@/lib/auth';
import { GitHubIcon, GoogleIcon } from '@/styles/Icons';
import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, extendTheme, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Home() {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const auth = useAuth();
    const router = useRouter()

    //Button background color is switched in designs 


    return (
        <>
            <Head>
                <title>Brain Dump</title>
            </Head>

            <Flex flexDirection="column">
                <NavBar />
            </Flex>

            <Flex
                align="center"
                py={4}
                px={8}
                justify="center"
            >
                <Box
                    backgroundColor={boxbg}
                    padding="100px"
                    paddingLeft="auto"
                    paddingRight="auto"
                    borderRadius="10px"
                    margin="40"
                >
                    <HStack>
                        <Heading size="2xl" color={color}>Brain</Heading>
                        <Heading size="2xl" color={pcolor}>DUMP</Heading>
                    </HStack>

                    <Center>
                        {auth?.user ? (
                            <Button
                                onClick={() => router.push('/dash')}
                                mt="6"
                                backgroundColor={btnbg}
                                color={btncolor}
                                size="lg"
                                width="175px"
                                height="50px"
                                _hover={{ bg: "#A0AEC0" }}
                            >
                                Go to Dash
                            </Button>
                        ) : (
                                <Stack>
                                    <Button
                                        onClick={(e) => auth.signinWithGithub()}
                                        leftIcon={<GitHubIcon />}
                                        mt="6"
                                        backgroundColor={btnbg}
                                        color={btncolor}
                                        size="lg"
                                        width="200px"
                                        height="50px"
                                        _hover={{ bg: "#A0AEC0" }}
                                    >
                                        Sign In with Github
                                </Button>

                                    <Button
                                        onClick={(e) => auth.signinWithGoogle()}
                                        leftIcon={<GoogleIcon />}
                                        mt="6"
                                        backgroundColor={btnbg}
                                        color={btncolor}
                                        size="lg"
                                        width="200px"
                                        height="50px"
                                        _hover={{ bg: "#A0AEC0" }}
                                    >
                                        Sign In with Google
</Button>
                                </Stack>
                            )}
                    </Center>
                </Box>
            </Flex>
        </>
    )
}