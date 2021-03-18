import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import {
    FormLabel,
    FormControl,
    Input,
    useDisclosure,
    Button,
    useToast,
    useColorMode,
    useColorModeValue,
    Select,
    Text,
    Alert,
    AlertIcon,
    Textarea,
    Box,
    Flex,
    useMediaQuery,
    Heading
} from "@chakra-ui/react";
import Head from 'next/head'
import useSWR from 'swr';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import React from 'react';
import { mutate } from 'swr';
import { createThought } from '@/lib/db';
import BigThought from '@/components/BigThought';
import NavBar from '@/components/NavBar';


const AddThoughtPage = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const { user } = useAuth();
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
                        <Heading size="2xl" pb={6} color={color}>Add Your Thought</Heading>
                        <BigThought />

                    </Flex>
                ) : (
                    <Flex
                        flexDirection="column"
                        maxWidth="1000px"
                        width="100%"
                        ml="auto"
                        mr="auto"
                    >
                        <Heading size="2xl" pb={6} color={color}>Add Your Thought</Heading>
                        <BigThought />

                    </Flex>
                )
                }

            </Flex>


        </>
    )
}


export default AddThoughtPage;