import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'

const VLandingHeader = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <Box borderLeft="3px solid" borderColor={btnbg} pl={4} mx={20}>
            <HStack pt={6}>
                <Heading size="4xl" color={color}>Brain</Heading>
                <Heading size="4xl" color={pcolor}>DUMP</Heading>
            </HStack>
            <Text fontSize="xl" pt="4" fontWeight="bold">A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.</Text>
            <Link href="/signin" _hover={{ textDecoration: "none" }}><Button mt="6" backgroundColor={btnbg} size="lg" width="175px" height="50px" _hover={{ bg: "#A0AEC0" }} >Get Started</Button></Link>
        </Box>
    )
}

export default VLandingHeader