import AboutList from '@/components/AboutList';
import NavBar from '@/components/NavBar';
import { Alert, AlertIcon, AspectRatio, Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import AccountShell from '@/components/AccountShell';
import SelectionList from '@/components/AccountSelection';



const Account = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");
    const [isLargerThan1075] = useMediaQuery("(max-width: 1075px)");
    const auth = useAuth();


    return (
        <>
            <Head>
                <title>Brain Dump</title>
            </Head>

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
                            mr="auto">
                            <AccountShell />
                            <SelectionList />


                        </Flex>
                    ) : (
                        <Flex
                            flexDirection="column"
                            maxWidth="1000px"
                            width="100%"
                            ml="auto"
                            mr="auto">
                            <AccountShell />
                            <SelectionList />


                        </Flex>
                    )
                    }

                </Flex>
            </>
        </>
    )
}


export default Account;