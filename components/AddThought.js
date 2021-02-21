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
    useColorModeValue
} from "@chakra-ui/react";
import { useAuth } from '@/lib/auth';

const AddThought = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useAuth();
    const initialRef = React.useRef()
    const toast = useToast();
    const { handleSubmit, register } = useForm();
    const onCreateSite = ({ name, url }) => {
        const newSite = {
            authorId: auth.user.uid,
            createAt: new Date().toISOString(),
            name,
            url
        }
        createSite(newSite);
        toast({
            title: "Success!.",
            description: "We've added your task.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        // mutate(
        //     ['/api/sites', auth.user.token],
        //     async (data) => ({
        //         sites: [...data.sites, { id, ...newSite }]
        //     }),
        //     false
        // );
        onClose();

        //Colors 

        const { toggleColorMode } = useColorMode()
        const color = useColorModeValue("gray.600", "gray.300");
        const pcolor = useColorModeValue("pink.200", "pink.200");
        const btnbg = useColorModeValue("cyan.300", "cyan.400");
        const boxbg = useColorModeValue("gray.200", "gray.700");
    };

    return (
        <>
            <Button
                onClick={onOpen}
            >
                + Add To Do
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Header</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder="Clean" name="name"
                                ref={register({
                                    required: "Required",
                                })} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder="Imporant" name="url"
                                ref={register({
                                    required: "Required",
                                })} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button fontWeight="medium" onClick={onClose} mr={3}>Cancel</Button>

                        <Button backgroundColor="#00B7E0" color="white" fontWeight="medium" type="submit" _hover={{ color: 'gray.700' }}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddThought;