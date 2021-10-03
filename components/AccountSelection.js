import { useAuth } from '@/lib/auth';
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack, Wrap, WrapItem, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const SelectionList = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const btncolor = useColorModeValue("gray.700", "white");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");
    const router = useRouter()
    const auth = useAuth();
    const { user } = useAuth();
    const toast = useToast()



    return (
        <>
            <Flex align="center" justifyContent="space-between" mt={8} pb={8} borderBottom="2px solid" borderBottomColor={btnbg}>
                <Text
                    color={color}
                    fontSize="2xl"
                    fontWeight="bold"
                >

                    Let us know what you want to see?
                </Text>
                {isLargerThan950 ? (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        height="50px"
                        width="150px"
                        onClick={() => router.push('https://github.com/matt1208/brain-dump/issues')}
                        _hover={{ bg: "#3CD7F6" }}
                    >
                        Request Feature
                    </Button>
                ) : (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        height="50px"
                        width="150px"
                        onClick={() => router.push('https://github.com/matt1208/brain-dump/issues')}
                        _hover={{ bg: "#3CD7F6" }}
                    >
                        Request A Feature
                    </Button>
                )
                }
            </Flex>



            <Flex align="center" justifyContent="space-between" mt={8} pb={8} borderBottom="2px solid" borderBottomColor={btnbg}>
                <Text
                    color={color}
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Report any bugs your find while using BrainDUMP.
                </Text>
                {isLargerThan950 ? (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        width="150px"
                        height="50px"
                        onClick={() => router.push('https://github.com/matt1208/brain-dump/issues')}
                        _hover={{ bg: "#3CD7F6" }}
                    >
                        Report Bug
                    </Button>
                ) : (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        height="50px"
                        width="150px"
                        onClick={() => router.push('https://github.com/matt1208/brain-dump/issues')}
                        _hover={{ bg: "#3CD7F6" }}
                    >
                        Report A Bug
                    </Button>
                )
                }
            </Flex>



            <Flex align="center" justifyContent="space-between" mt={8} pb={8} borderBottom="2px solid" borderBottomColor={btnbg}>
                <Text
                    color={color}
                    fontSize="2xl"
                    fontWeight="bold"
                    pr={2}
                >

                    BrainDUMP wants you to be in control of your data.
                </Text>
                {isLargerThan950 ? (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        height="50px"
                        _hover={{ bg: "#3CD7F6" }}
                        onClick={() => router.push('https://airtable.com/shrdCiDXVCgYmQbQW')}
                    >
                        Manage
                    </Button>
                ) : (
                    <Button
                        variant="solid"
                        backgroundColor={btnbg}
                        color={btncolor}
                        size="md"
                        height="50px"
                        width="150px"
                        _hover={{ bg: "#3CD7F6" }}
                        onClick={() => router.push('https://airtable.com/shrdCiDXVCgYmQbQW')}
                    >
                        Manage Your Data
                    </Button>
                )
                }
            </Flex>



            <Flex align="center" justifyContent="space-between" mt={8}>
                <Text
                    color={color}
                    fontSize="2xl"
                    fontWeight="bold"
                >

                    Delete Your Account
                </Text>
                <Button
                    variant="solid"
                    backgroundColor="#F56565"
                    color={btncolor}
                    size="md"
                    height="50px"
                    width="150px"
                    onClick={() =>
                        toast({
                            title: "Feature Not Available",
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        })
                    } _hover={{ bg: "#FC8181" }}
                >
                    Delete Account
                </Button>
            </Flex>
        </>
    )
}

export default SelectionList;