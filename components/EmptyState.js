import { Button, Flex, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import AddThought from "./AddThought";

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
            p={6}
            mt={4}
            bg={boxbg}
        >
            <Heading color={color} textAlign="center">You Haven't Added Anything!</Heading>
            <Text color={color} textAlign="center" py={4}>Add your thoughts, ideas, and notes so you can remember later.</Text>
            <AddThought />
            <Text color={color} pt={4}>Learn More</Text>

        </Flex>
    )
}

export default EmptyArea