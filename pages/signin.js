import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, extendTheme, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    //Button background color is switched in designs 


    return (
        <>
            <Head>
                <title>Brain Dump</title>
            </Head>

            <Flex flexDirection="column">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    py={4}
                    px={8}
                >
                    <Stack
                        isInline
                        spacing={4}
                        alignItems="stretch"
                    >
                        {/* <HStack>
              <Heading color={color}>Brain</Heading>
              <Heading color={pcolor}>DUMP</Heading>
            </HStack> */}
                        <Link href="/" >
                            <Image src="brain.svg" boxSize="60px" />
                        </Link>
                    </Stack>
                    <Flex alignItems="center">
                        <IconButton aria-label="Search database" icon={<SunIcon />} bg={btnbg} size="lg" onClick={toggleColorMode}>
                            Theme
            </IconButton>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                align="center"
                py={4}
                px={8}
                justify="center"
            >
                <Box
                    backgroundColor={boxbg}
                    padding="100px"
                    paddingLeft="auto"
                    paddingRight="auto"
                    borderRadius="10px"
                    margin="52"
                >
                    <HStack>
                        <Heading size="2xl" color={color}>Brain</Heading>
                        <Heading size="2xl" color={pcolor}>DUMP</Heading>
                    </HStack>

                    <Center>
                        <Button mt="6" backgroundColor={btnbg} size="lg" width="175px" height="50px" _hover={{ bg: "#A0AEC0" }} >Sign In with Github</Button>
                    </Center>
                </Box>
            </Flex>
        </>
    )
}