import DashHeader from '@/components/DashHeader';
import EmptyArea from '@/components/EmptyState';
import NavBar from '@/components/NavBar';
import Shell from '@/components/Shell';
import ToDoSkeleton from '@/components/Skeleton';
import ThoughtGrid from '@/components/ThoughtGrid';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { Box, Button, Center, extendTheme, Flex, Heading, HStack, IconButton, Image, Link, Skeleton, Stack, Text, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import useSWR from 'swr';


const Dash = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const auth = useAuth();
    const [isLargerThan1075] = useMediaQuery("(max-width: 1075px)");
    const { data } = useSWR('/api/thought', fetcher);


    if (!data) {
        return (
            <Shell>
                <ToDoSkeleton />
            </Shell>
        );
    }

    return (
        <Shell>
            {data.sites.length ? <ThoughtGrid sites={data.sites} /> : <EmptyArea />}
        </Shell>
    );
};

export default Dash;
