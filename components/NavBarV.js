import { useAuth } from '@/lib/auth';
import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Menu, Link, SimpleGrid, Spacer, Stack, Text, useColorMode, useColorModeValue, MenuButton, Avatar, MenuList, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import ProfileIcon from './ProfileMenu';

const NavBarV = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();
    const { user } = useAuth();


    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py={4}
            px={8}
        >
            <Stack
                isInline
                spacing={4}
                alignItems="stretch"
            >
                <Image src="brain.svg" alt="Brain Logo" boxSize="60px" _hover={{ cursor: "pointer" }} onClick={() => router.push('/')} />
            </Stack>
            <Flex alignItems="center">
                {auth?.user ? (
                    <>
                        {/* <Button
                            onClick={(e) => auth.signout()}
                            variant="solid"
                            backgroundColor={btnbg}
                            color={btncolor}
                            size="lg"
                            mr={4}
                            height="50px"
                            _hover={{ bg: "#3CD7F6" }}
                        >
                            Sign Out
                        </Button>  */}
                        <ProfileIcon />

                        <IconButton aria-label="Search database" icon={<SunIcon />} size="lg" onClick={toggleColorMode}>
                            Theme
                        </IconButton>
                    </>

                ) : (
                    <>
                        <Button
                            onClick={() => router.push('/signin')}
                            variant="solid"
                            backgroundColor={btnbg}
                            color={btncolor}
                            size="lg"
                            mr={4}
                            height="50px"
                            _hover={{ bg: "#3CD7F6" }}
                        >
                            Sign In
                </Button>
                        <IconButton aria-label="Search database" icon={<SunIcon />} size="lg" onClick={toggleColorMode}>
                            Theme
                </IconButton>
                    </>

                )}
            </Flex>
        </Flex >
    )
}

export default NavBarV