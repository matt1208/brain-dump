import { Button, Flex, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const EmptyArea = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <Flex
            flexDirection="column"
            borderRadius="10px"
            alignItems="center"
            p={4}
            mt={4}
            bg={boxbg}
        >
            <Heading color={color}>Test Flex</Heading>
            <Text color={color} py={4}>Descripton</Text>
            <Button bg={btnbg} width="150px">Button</Button>
            <Text color={color} pt={4}>Descripton</Text>

        </Flex>
    )
}

export default EmptyArea