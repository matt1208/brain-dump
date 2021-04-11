import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Spacer, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const FooterV = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()


    return (
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
                <Heading fontSize="16px" opacity="75%" color={color}>BrainDUMP © 2021</Heading>
            </Stack>
            <Flex alignItems="center">
                <Stack
                    isInline
                    spacing={2}
                    alignItems="stretch"
                >
                    <Link onClick={() => router.push('/signin')} fontSize="16px" opacity="75%" fontWeight="semibold" color={color}>Sign In</Link>
                    <Link onClick={() => router.push('/brainblog')} fontSize="16px" opacity="75%" fontWeight="semibold" color={color}>Blog</Link>
                    <Link onClick={() => router.push('/privacy')} fontSize="16px" opacity="75%" fontWeight="semibold" color={color}>Privacy</Link>
                    <Link onClick={() => router.push('/about')} fontSize="16px" opacity="75%" fontWeight="semibold" color={color}>About</Link>
                </Stack>
            </Flex>
        </Flex >
    )
}

export default FooterV;