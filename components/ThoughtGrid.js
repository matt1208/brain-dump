import { DeleteIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Icon, IconButton, SimpleGrid, Tag, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import DeleteBtn from '@/components/Delete';

const ThoughtGrid = ({ sites }) => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");

    return (
        <SimpleGrid columns={[1, null, 3]} spacing={10} pb={4}>
            {sites.map((site) => (
                <Box bg={boxbg} p={4} borderRadius="10px">
                    <Heading pb={2} size="lg" color={color}>{site.title}</Heading>
                    <Tag border="2px solid" borderColor={pcolor} color={color}>{site.tag}</Tag>
                    <DeleteBtn siteId={site.id} />
                    <Text pt={4} color={color}>{site.thought}</Text>
                </Box>
            ))}

        </SimpleGrid>
    )
}

export default ThoughtGrid