import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Spacer, Stack, Tag, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const NewsGrid = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");



    return (
        <>
            <SimpleGrid columns={[1, null, 3]} spacing={10} pb={6}>
                <Flex
                    backgroundColor={boxbg}
                    borderRadius="10px"
                    p={4}
                    height="100%"
                    flexDirection="column"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push('/bbprivacycard')}
                    _hover={{ transform: "translateY(-5px) scale(1.005) translateZ(0)" }}
                >
                    <Flex
                        flexDirection="column"
                        m={2}
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

export default NewsGrid;