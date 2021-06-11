import { useAuth } from '@/lib/auth';
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const AccountShell = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();
    const { user } = useAuth();


    return (
        <Flex>
            <Wrap>
                <WrapItem>
                    <Avatar bg={boxbg} name="Matthew" size="xl" src={user?.photoUrl} />
                </WrapItem>
                <VStack
                    alignItems="left"
                    pl={4}
                    mt={2}
                >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="/dash"
                                fontWeight="bold"
                                color={color}
                            >
                                Thoughts
                             </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <WrapItem>
                        <Heading color={color} mb={8} size="2xl">Hey, {user?.name} </Heading>
                    </WrapItem>
                </VStack>
            </Wrap>
        </Flex>
    )
}

export default AccountShell;
