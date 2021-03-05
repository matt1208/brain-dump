import { useAuth } from '@/lib/auth';
import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Spacer, Stack, Text, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import FooterR from './FooterR';
import FooterV from './FooterV';


const Footer1 = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");



    return (
        <>
            {isLargerThan950 ? (
                <FooterV />
            ) : (
                    <FooterR />
                )
            }
        </>
    )
}

export default Footer1