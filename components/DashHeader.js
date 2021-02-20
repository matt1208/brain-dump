import { useAuth } from '@/lib/auth';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const DashHeader = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();

    return (
        <Flex justifyContent="space-between">
            <Heading color={color} mb={8} size="2xl">Header</Heading>
            <Button bg={btnbg}>+ Add Site</Button>
        </Flex>
    )
}

export default DashHeader;