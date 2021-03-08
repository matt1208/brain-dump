import NavBar from '@/components/NavBar';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head';


const AboutList = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");
    const [isLargerThan1075] = useMediaQuery("(max-width: 1075px)");

    return (
        <>

            <List spacing={4}>

                <ListItem color={color}>
                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                Whenever you need to store a thought or idea that pops into your brain use BrainDUMP to store it quickly.
                            </ListItem>

                <ListItem color={color}>
                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                                Each thought gets its own Thought Card, including the title, whatever you wanted to write down, and a tag to help you better sort all your thoughts.
                            </ListItem>

                <ListItem color={color}>
                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                    Tags help easily determine what your thought is at a quick glance. Imporant, Idea, Note, and Random are all of the current tag choices available that allow you to keep track of your thoughts easier.
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
                                BrainDUMP believes privacy is a top priority, which is why we keep all thoughts private and we will not sell your data. Visit our <Link fontWeight="semibold">Privacy</Link> page for more information.
                            </ListItem>

                <ListItem color={color}>
                    <ListIcon boxSize="20px" as={ArrowForwardIcon} color={pcolor} />
                    More features will be rolling out soon to better the user experience.
                </ListItem>

            </List>


        </>
    )
}


export default AboutList;
