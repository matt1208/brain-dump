import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Spacer, Stack, Tag, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const FeaturedGrid = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");



    return (
        <>
            <Box
                width="100%"
                backgroundColor={boxbg}
                borderRadius="10px"
                p={4}
                pt={8}
                pb={8}
                height="100%"
                style={{ cursor: "pointer" }}
                onClick={() => router.push('/bbrelease')}
                _hover={{ transform: "translateY(-5px) scale(1.005) translateZ(0)" }}
            >

                <SimpleGrid columns={[1, null, 2]} >
                    <Center>
                        <Box marginLeft="10%">
                            <Image src="/BrainBlog.svg" alt="Brain Blog icons. A brain and a piece of paper." width="300px"></Image>
                        </Box>
                    </Center>

                    <Center>
                        <Box
                            // marginBottom="20px"
                            // marginTop="160px"
                            textAlign="right"
                        >
                            <Text color={color} fontWeight="bold">Update</Text>
                            <Heading size="xl" color={color}>Release of Brain Blog</Heading>
                        </Box>
                    </Center>
                </SimpleGrid>
            </Box>


            <br></br>

            <SimpleGrid columns={[1, null, 2]} spacing={10} pb={6} borderBottom="4px solid" borderBottomColor={boxbg}>
                <Flex
                    backgroundColor={boxbg}
                    borderRadius="10px"
                    p={4}
                    height="300px"
                    flexDirection="column"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push('/bbcolortags')}
                    _hover={{ transform: "translateY(-5px) scale(1.005) translateZ(0)" }}
                >
                    <Center>
                        <Circle size="200px" bg="#4A5568">
                            <VStack>
                                <Tag border="2px solid" borderColor="#4299E1" mr={10} boxShadow="0px 0px 10px #4299E1">Note</Tag>
                                <Tag border="2px solid" borderColor="#38B2AC" ml={10} boxShadow="0px 0px 10px #38B2AC">Idea</Tag>
                                <Tag border="2px solid" borderColor="#F687B3" mr={10} boxShadow="0px 0px 10px #F687B3">Random</Tag>
                                <Tag border="2px solid" borderColor="#48BB78" ml={10} boxShadow="0px 0px 10px #48BB78">Important</Tag>
                            </VStack>
                        </Circle>
                    </Center>

                    <Flex
                        flexDirection="column"
                        marginTop="15px"
                        // marginTop="215px"
                        pl="2"
                    >
                        <Text color={color} fontWeight="bold">Update</Text>
                        <Heading size="lg" color={color}>Color Tags</Heading>
                    </Flex>
                </Flex>

                <Flex
                    backgroundColor={boxbg}
                    borderRadius="10px"
                    p={4}
                    height="300px"
                    flexDirection="column"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push('/bbprivacycard')}
                    _hover={{ transform: "translateY(-5px) scale(1.005) translateZ(0)" }}
                >
                    <Center>
                        <Circle size="200px" bg="#4A5568">
                            <Image src="/Privacy.png" boxSize="175px" marginBottom={2}></Image>
                        </Circle>
                    </Center>

                    <Flex
                        flexDirection="column"
                        marginTop="15px"
                        // marginTop="215px"
                        pl="2"
                    >
                        <Text color={color} fontWeight="bold">Update</Text>
                        <Heading size="lg" color={color}>Privacy Card</Heading>
                    </Flex>
                </Flex>
            </SimpleGrid>

        </>
    )
}

export default FeaturedGrid;