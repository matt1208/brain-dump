import { useAuth } from '@/lib/auth';
import { SunIcon } from '@chakra-ui/icons';
import { Avatar, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import FooterR from './FooterR';
import FooterV from './FooterV';


const ProfileIcon = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue("gray.600", "gray.300");
    const pcolor = useColorModeValue("pink.200", "pink.200");
    const btnbg = useColorModeValue("cyan.300", "cyan.400");
    const boxbg = useColorModeValue("gray.200", "gray.700");
    const router = useRouter()
    const auth = useAuth();
    const { user } = useAuth();
    const [isLargerThan950] = useMediaQuery("(max-width: 950px)");



    return (
        <Menu>
            <MenuButton height="50px" bg={boxbg} mr={4} src={user?.photoUrl} as={Avatar} />

            <MenuList>
                <MenuItem color={color} onClick={() => router.push('/dash')}>Thoughts</MenuItem>
                <MenuItem color={color} onClick={() => router.push('/account')}>Account</MenuItem>
                <MenuDivider />
                <MenuItem color={color} onClick={(e) => auth.signout()}>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default ProfileIcon