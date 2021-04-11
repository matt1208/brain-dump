import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Spacer, Stack, Text, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const ReleaseText = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");



    return (
        <>
            <Text
                color={color}
                borderLeft="3px solid"
                borderColor={btnbg}
                pl={4}
                // fontWeight="bold"
                fontSize="lg"
            >
                Today BrainDUMP is pleased to release Brain Blog, which will be the home for all new announcements and updates from BrainDUMP, our new story collection will also be featured on Brain Blog.
            </Text>

            <Text
                mt={4}
                color={color}
            >
                Brain Blog will keep you up to date on all of our new features and updates to BrainDUMP Updates will provide details and information on exactly what users can expect from new features and updates.
            </Text>

            <Text
                mt={4}
                color={color}
            >
                Our Story Collection will feature some of our users and their stories using BrainDUMP.  The Story Collection will share an inside into individuals, creators, and developers all using BrainDUMP or are doing inspiring work today. Stories will feature the work flows they use and their process for storing and executing ideas.
             </Text>

            <Text
                mt={4}
                color={color}
            >
                Stay tuned to Brain Blog for the latest updates and as the Story Collection rolls out in late Spring.
           </Text>
        </>
    )
}

export default ReleaseText;