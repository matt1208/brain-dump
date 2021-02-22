import { Box, Button, Flex, Heading, SimpleGrid, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThoughtGrid = ({ sites }) => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <SimpleGrid columns={3} spacing={10}>
            {sites.map((site) => (
                <Box bg={boxbg}>
                    <Heading>{site.title}</Heading>
                    <Text>{site.thought}</Text>
                    <Text>{site.tag}</Text>
                </Box>
            ))}

        </SimpleGrid>
    )
}

export default ThoughtGrid