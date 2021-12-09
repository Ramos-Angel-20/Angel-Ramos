import { Flex, Box, useColorModeValue, Heading, Container, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaCode } from 'react-icons/fa';
import { HiMenuAlt3, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

const Navbar = () => {


    const { toggleColorMode, colorMode } = useColorMode();
    const navBgColor = useColorModeValue('#ffffff40', '#20202380');

    return (
        <Box
            as='nav'
            backgroundColor={navBgColor}
            w='100%'
            position='sticky'
            zIndex={1}
            style={{ backdropFilter: 'blur(10px)' }}
            top={0}
        >
            <Flex w='90%' marginX='auto' maxW='900px' paddingY={2} >
                <Flex w='100%' p={0} align='center' >
                    <IconButton fontSize={20} variant='ghost' icon={<FaCode />} />
                    <Heading fontSize='25px' >Angel Ramos</Heading>
                </Flex>
                <Flex>
                    <IconButton backgroundColor={colorMode === 'light' ? 'purple.600' : 'orange.300'} color='white' icon={colorMode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />} onClick={toggleColorMode} fontSize={20} marginRight={2} />
                    <Menu>
                        <MenuButton  display={['flex', null, 'none']} alignItems='center' justifyContent='center' as={IconButton} icon={<HiMenuAlt3 />} aria-label='Sections' fontSize={20} />
                        <MenuList>
                            <MenuItem>
                                Proyectos
                            </MenuItem>
                            <MenuItem>
                                Contacto
                            </MenuItem>                            
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;