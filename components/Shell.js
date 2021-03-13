import DashHeader from '@/components/DashHeader';
import EmptyArea from '@/components/EmptyState';
import NavBar from '@/components/NavBar';
import ToDoSkeleton from '@/components/Skeleton';
import ThoughtGrid from '@/components/ThoughtGrid';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { Box, Button, Center, extendTheme, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'


const Shell = ({ children }) => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const auth = useAuth();
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
                        mr="auto">
                        <DashHeader />

                        {children}

                        {/* <Text mt={4}> Hey {auth?.user ? auth.user.email : 'None'}</Text> */}


                    </Flex>
                ) : (
                    <Flex
                        flexDirection="column"
                        maxWidth="1000px"
                        width="100%"
                        ml="auto"
                        mr="auto">
                        <DashHeader />

                        {children}


                        {/* <Text mt={4}> Hey {auth?.user ? auth.user.email : 'None'}</Text> */}
                    </Flex>
                )
                }

            </Flex>
        </>
    )
}

export default Shell;
