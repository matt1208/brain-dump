import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'

const LandingGrpahic = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <SimpleGrid columns={[1, null, 3]} spacing={10} ml={20} mr={20} mt={10}>
            <VStack>
                <Circle size="250px" bg={boxbg}>
                    <Image src="GlowBrain.svg" alt="Glowing Brain"></Image>
                </Circle>
                <Heading pt={2} color={color} fontSize="xl" letterSpacing={1} textAlign="center">Have An Imporant Thought?</Heading>
                <Text color={color} textAlign="center">Need to store something you were just thinking? BrainDUMP can successfully store all your thoughts.</Text>
            </VStack>

            <VStack>
                <Circle size="250px" bg={boxbg}>
                    <Image src="Paper.svg" boxSize="180px" alt="Paper"></Image>
                </Circle>
                <Heading pt={2} color={color} fontSize="xl" letterSpacing={1}>Write it Down</Heading>
                <Text color={color} textAlign="center">Use BrainDUMP to write down whatever you need. Just sign in and create a new thought card to reference later.</Text>
            </VStack>

            <VStack>
                <Circle size="250px" bg={boxbg}>
                    <Image src="Confetti.svg" alt="Celebration Graphic" pt={4} pr={6}></Image>
                </Circle>
                <Heading pt={2} color={color} fontSize="xl" letterSpacing={1}>All Done!</Heading>
                <Text color={color} textAlign="center">Now that you have stored your thought, you can come back at any time to reference or remember what you were thinking.</Text>
            </VStack>
        </SimpleGrid>
    )
}

export default LandingGrpahic