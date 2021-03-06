import { useRef } from 'react';
import { useForm } from "react-hook-form";
import React from 'react';
import { mutate } from 'swr';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
    Link,
    IconButton,
    Circle
} from "@chakra-ui/react";
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router'
import { createThought } from '@/lib/db';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const AddThought = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
        onClose();

    };
    //Colors 

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter();


    return (
        <>
            <Button
                onClick={onOpen}
                bg={btnbg}
                color={btncolor}
                _hover={{ bg: "#3CD7F6" }}
            >
                + Add Thought
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                bg={boxbg}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateThought)}>
                    <ModalHeader fontWeight="bold" color={color}>Add Your Thought <IconButton variant="ghost" onClick={() => router.push('/addthought')} icon={<ExternalLinkIcon />} /></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

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
                                <option>To Do</option>
                                <option>Random</option>
                            </Select>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button fontWeight="medium" onClick={onClose} mr={3}>Cancel</Button>

                        <Button bg={btnbg} color="white" fontWeight="medium" type="submit" _hover={{ bg: "#3CD7F6" }}>
                            Create
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddThought;