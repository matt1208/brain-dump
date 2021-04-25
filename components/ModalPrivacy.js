import { ArrowForwardIcon, ArrowRightIcon, ChevronDownIcon, ChevronRightIcon, CloseIcon, LockIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, Modal, ModalBody, ModalContent, ModalOverlay, SimpleGrid, Spacer, Stack, Tag, Text, useColorMode, useColorModeValue, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const ModalPrivacy = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Center>
                <HStack>
                    <LockIcon color={color} />
                    <Link
                        fontSize="sm"
                        color={color}
                        onClick={onOpen}
                    >
                        Privacy
                  </Link>
                </HStack>
            </Center>

            <Modal isOpen={isOpen} onClose={onClose}
                borderRadius="10px"
                height="100%"
            >
                <ModalOverlay />
                <ModalContent
                    p={2}
                    pt={8}
                    pb={8}
                >

                    <Heading
                        size="lg"
                        color={color}
                        marginLeft="5%"
                    >
                        Key Privacy Information
                    </Heading>

                    <SimpleGrid columns={[1, null, 2]} mt={4}>
                        <Box marginLeft="10%">

                            <List spacing={4} mb={2}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                    Name
                             </ListItem>
                            </List>

                            <List spacing={4} mb={2}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                    Email
                             </ListItem>
                            </List>

                            <List spacing={4} mb={2}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                    Social Provider
                             </ListItem>
                            </List>
                        </Box>


                        <Box marginLeft="10%">

                            <List spacing={4} mb={2}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="18px" as={CloseIcon} color={pcolor} />
                                    BrainDUMP does not track you.
                             </ListItem>
                            </List>

                            <List spacing={4} mb={2}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="18px" as={CloseIcon} color={pcolor} />
                                    BrainDUMP does not give any of your data away.
                             </ListItem>
                            </List>

                            <List spacing={4}>
                                <ListItem color={color}>
                                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                    We do use a simple cookie to keep you logged in among visits.
                             </ListItem>
                            </List>
                        </Box>
                    </SimpleGrid >

                    <HStack mt={4}>
                        <Link
                            color={color}
                            marginLeft="5%"
                            onClick={() => router.push('/privacy')}
                        >
                            More About BrainDUMP Privacy
                        </Link>
                        <ArrowForwardIcon color={color} boxSize={6} />
                    </HStack>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalPrivacy;