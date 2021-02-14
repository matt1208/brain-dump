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
                    <Image src="GlowBrain.svg"></Image>
                </Circle>
                <Heading fontSize="xl" letterSpacing={1}>Text</Heading>
                <Text>Description</Text>
            </VStack>

            <VStack>
                <Circle size="250px" bg={boxbg}>
                    <Image src="Paper.svg" boxSize="180px"></Image>
                </Circle>
                <Heading fontSize="xl" letterSpacing={1}>Text</Heading>
                <Text>Description</Text>
            </VStack>

            <VStack>
                <Circle size="250px" bg={boxbg}>
                    <Image src="Confetti.svg" pt={4} pr={6}></Image>
                </Circle>
                <Heading fontSize="xl" letterSpacing={1}>Text</Heading>
                <Text>Description</Text>
            </VStack>
        </SimpleGrid>
    )
}

export default LandingGrpahic