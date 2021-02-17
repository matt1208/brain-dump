import NavBar from '@/components/NavBar';
import { useAuth } from '@/lib/auth';
import { Box, Button, Center, extendTheme, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const auth = useAuth();

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
                <Text>Hey {auth?.user ? auth.user.email : 'None'}</Text>
            </Flex>
        </>
    )
}