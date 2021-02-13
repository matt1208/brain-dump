import { SunIcon } from '@chakra-ui/icons';
import { Button, extendTheme, Flex, Heading, HStack, IconButton, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {

  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue("gray.600", "gray.300");
  const pcolor = useColorModeValue("pink.200", "pink.200");
  const btnbg = useColorModeValue("cyan.300", "cyan.400");
  //Button background color is switched in designs 


  return (
    <>
      <Head>
        <title>Brain Dump</title>
      </Head>

      <Flex flexDirection="column">
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
            <HStack>
              <Heading color={color}>Brain</Heading>\
              <Heading color={pcolor}>DUMP</Heading>
            </HStack>
          </Stack>
          <Flex alignItems="center">
            <IconButton aria-label="Search database" icon={<SunIcon />} bg={btnbg} size="lg" onClick={toggleColorMode}>
              Theme
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

//Work on hover for buttons and themeing for the icon + the spacing of header