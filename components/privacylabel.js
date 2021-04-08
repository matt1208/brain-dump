import { ArrowForwardIcon, CloseIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Spacer, Stack, Tag, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const PrivacyLabel = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");



    return (
        <>
            <Box
                width="100%"
                border="4px solid"
                borderColor={boxbg}
                borderRadius="10px"
                p={2}
                pt={6}
                pb={6}
                height="100%"
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
            </Box >



        </>
    )
}

export default PrivacyLabel;