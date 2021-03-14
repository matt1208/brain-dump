import { useAuth } from '@/lib/auth';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const VLandingHeader = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();
    const [isLargerThan700] = useMediaQuery("(max-width: 700px)");


    return (
        <Box borderLeft="3px solid" borderColor={btnbg} pl={4} mx={8}>
            <HStack pt={6}>
                <Heading size="4xl" color={color}>Brain</Heading>
                <Heading size="4xl" color={pcolor}>DUMP</Heading>
            </HStack>
            <Text color={color} fontSize="xl" pt="4" fontWeight="bold">A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.</Text>
            {auth?.user ? (
                <Button
                    onClick={() => router.push('/dash')}
                    mt="6"
                    backgroundColor={btnbg}
                    size="lg"
                    width="175px"
                    height="50px"
                    _hover={{ bg: "#3CD7F6" }}
                >
                    Go to Dash
                </Button>
            ) : (
                <Button
                    mt="6"
                    backgroundColor={btnbg}
                    color={btncolor}
                    size="lg"
                    width="175px"
                    height="50px"
                    _hover={{ bg: "#3CD7F6" }}
                    onClick={() => router.push('/signin')}
                >
                    Get Started
                </Button>
            )}
        </Box>
    )
}

export default VLandingHeader