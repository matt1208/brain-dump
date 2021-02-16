import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const VLandingHeader = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()


    return (
        <Box borderLeft="3px solid" borderColor={btnbg} pl={4} mx={20}>
            <HStack pt={6}>
                <Heading size="4xl" color={color}>Brain</Heading>
                <Heading size="4xl" color={pcolor}>DUMP</Heading>
            </HStack>
            <Text fontSize="xl" pt="4" fontWeight="bold">A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.</Text>
            <Button mt="6" backgroundColor={btnbg} size="lg" width="175px" height="50px" _hover={{ bg: "#A0AEC0" }} onClick={() => router.push('/signin')} >Get Started</Button>
        </Box>
    )
}

export default VLandingHeader