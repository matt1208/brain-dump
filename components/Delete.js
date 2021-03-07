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
    Checkbox
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
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Thought
                </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                         </Button>
                        <Button
                            fontWeight="bold"
                            colorScheme="red"
                            onClick={onDelete}
                            ml={3}
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