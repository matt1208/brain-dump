import { useRef } from 'react';
import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Text,
    Alert,
    AlertIcon,
    Link,
    Heading,
    List,
    ListIcon,
    ListItem
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router'


const LearnMore = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const router = useRouter()


    //Colors 

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <>
            <Link
                onClick={onOpen}
                color={color}
                pt={4}
            >
                Learn More
            </Link>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                bg={boxbg}
            >
                <ModalOverlay />

                <ModalContent p={2}>

                    <ModalHeader color={color}>Learn About BrainDUMP</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <List spacing={4}>

                            <ListItem color={color}>
                                <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                Whenever you need to store a thought or idea that pops into your brain use BrainDUMP to store it quickly.
                            </ListItem>

                            <ListItem color={color}>
                                <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                Each thought gets its own Thought Card, including the title, whatever you wanted to write down, and a tag to help you better sort all your thoughts.
                            </ListItem>

                            <Alert status="error">
                                <AlertIcon />
                                  Do not store passwords or personal data
                             </Alert>

                            <ListItem color={color}>
                                <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                Each thought you create can be deleted at any time once you don't need it.
                            </ListItem>

                            <ListItem color={color}>
                                <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                BrainDUMP believes privacy is a top priority, which is why we keep all thoughts private and we will not sell your data.
                            </ListItem>

                            <ListItem color={color}>
                                <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                <Link onClick={() => router.push('/about')} fontWeight="semibold">Read More</Link>
                            </ListItem>

                        </List>
                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    )
}

export default LearnMore;
