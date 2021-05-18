import React, { useState, useRef } from 'react';
import { mutate } from 'swr';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
    Button,
    Checkbox,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';
import { deleteThought } from '@/lib/db';
import { DeleteIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';

const DeleteBtn = ({ siteId }) => {
    const [isOpen, setIsOpen] = useState();
    const cancelRef = useRef();
    const auth = useAuth();
    const onClose = () => setIsOpen(false);
    const onDelete = () => {
        deleteThought(siteId);
        mutate(
            ['/api/thought', auth.user.token],
            async (data) => {
                return {
                    sites: data.sites.filter((site) => site.id !== siteId)
                };
            },
            false
        );
        onClose();
    };

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <>
            <IconButton
                as={DeleteIcon}
                onClick={() => setIsOpen(true)}
                background="none"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                cursor="pointer"
                boxSize={4}
                opacity="75%"
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay />
                <AlertDialogContent bg={boxbg}
                >
                    <AlertDialogHeader color={color} fontSize="lg" fontWeight="bold">
                        Delete Thought
                </AlertDialogHeader>
                    <AlertDialogBody color={color}>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} fontWeight="normal">
                            Cancel
                         </Button>
                        <Button
                            fontWeight="normal"
                            colorScheme="red"
                            onClick={onDelete}
                            ml={3}
                            color="white"
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
export default DeleteBtn;