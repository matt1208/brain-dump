import LandingGrpahic from '@/components/LandingGraphic';
import LandingHeader from '@/components/LandingHeader';
import NavBar from '@/components/NavBar';
import VLandingGraphic from '@/components/VLandingGraphic';
import VLandingHeader from '@/components/VLandingHeader';
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
  const [isLargerThan950] = useMediaQuery("(max-width: 950px)");



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

        {isLargerThan950 ? (
          <VLandingHeader />
        ) : (
            <LandingHeader />
          )
        }

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

