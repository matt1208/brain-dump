import LandingGrpahic from '@/components/LandingGraphic';
import NavBar from '@/components/NavBar';
import VLandingGraphic from '@/components/VLandingGraphic';
import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head'


export default function Home() {

  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue("gray.600", "gray.300");
  const pcolor = useColorModeValue("pink.200", "pink.200");
  const btnbg = useColorModeValue("cyan.300", "cyan.400");
  const boxbg = useColorModeValue("gray.200", "gray.700");
  const [isLargerThan1100] = useMediaQuery("(max-width: 1100px)");


  //Button background color is switched in designs 


  return (
    <>
      <Head>
        <title>Brain Dump</title>
      </Head>

      <Flex flexDirection="column">
        <NavBar />
      </Flex>

      <Container maxW="1200px" ml="auto" mr="auto" py={8} >

        <SimpleGrid columns={[1, null, 2]} spacing={40} ml={20} mr={20}>

          <Box borderLeft="3px solid" borderColor={btnbg} pl={4}>
            <HStack pt={6}>
              <Heading size="4xl" color={color}>Brain</Heading>
              <Heading size="4xl" color={pcolor}>DUMP</Heading>
            </HStack>
            <Text fontSize="xl" pt="4" fontWeight="bold">A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.</Text>
            <Link href="/signin" _hover={{ textDecoration: "none" }}><Button mt="6" backgroundColor={btnbg} size="lg" width="175px" height="50px" _hover={{ bg: "#A0AEC0" }} >Get Started</Button></Link>
          </Box>

          <Image src="brain.svg" boxSize="400px" />

        </SimpleGrid>

        <br></br>
        <br></br>

        {isLargerThan1100 ? (
          <VLandingGraphic />
        ) : (
            <LandingGrpahic />
          )
        }

      </Container>
    </>
  )
}

