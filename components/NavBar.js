import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const NavBar = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()


    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py={4}
            px={20}
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
                <Image src="brain.svg" alt="Brain Logo" boxSize="60px" _hover={{ cursor: "pointer" }} onClick={() => router.push('/')} />
            </Stack>
            <Flex alignItems="center">
                <IconButton aria-label="Search database" icon={<SunIcon />} bg={btnbg} size="lg" onClick={toggleColorMode}>
                    Theme
            </IconButton>
            </Flex>
        </Flex>
    )
}

export default NavBar