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
    Box
} from "@chakra-ui/react";
import Head from 'next/head'
import useSWR from 'swr';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import React from 'react';
import { mutate } from 'swr';
import { createThought } from '@/lib/db';
import { useRouter } from 'next/router'


const BigThought = () => {

    const auth = useAuth();
    const initialRef = React.useRef()
    const toast = useToast();
    const { handleSubmit, register } = useForm();
    const onCreateThought = ({ title, thought, tag }) => {
        const newThought = {
            authorId: auth.user.uid,
            createAt: new Date().toISOString(),
            title,
            thought,
            tag
        }
        const { id } = createThought(newThought);

        toast({
            title: "Success!.",
            description: "We've added your thought.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        mutate(
            ['/api/thought', auth.user.token],
            async (data) => ({
                sites: [{ id, ...newThought }, ...data.sites]
            }),
            false
        );
        router.push('/dash')

    };

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const { user } = useAuth();
    const router = useRouter();


    return (
        <>
            <Box as="form" onSubmit={handleSubmit(onCreateThought)}>
                <FormControl>
                    <FormLabel color={color}>Title</FormLabel>
                    <Input ref={initialRef} placeholder="New Project!" name="title"
                        ref={register({
                            required: "Required",
                        })} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel color={color}>Thought</FormLabel>
                    <Textarea placeholder="What's on your mind..." name="thought"
                        ref={register({
                            required: "Required",
                        })} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel color={color}>Tag</FormLabel>
                    <Select placeholder="Select a tag" name="tag"
                        ref={register({
                            required: "Required",
                        })} >
                        <option>Important</option>
                        <option>Idea</option>
                        <option>Note</option>
                        <option>Random</option>
                    </Select>
                </FormControl>

                <br></br>


                <Button fontWeight="medium" onClick={() => router.push('/dash')} mr={3}>Cancel</Button>

                <Button bg={btnbg} color="white" fontWeight="medium" type="submit" _hover={{ bg: "#3CD7F6" }}>
                    Create
                 </Button>
            </Box>
        </>
    )
}


export default BigThought;