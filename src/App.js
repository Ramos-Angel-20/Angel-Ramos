import { Flex, Box, Heading, Button, useColorModeValue, Link, Container, Text, Image } from '@chakra-ui/react';

import flag from './assets/mexico.svg';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  
  const appBgColor = useColorModeValue('#f0e7db', 'gray.900');
  const boxBgColor = useColorModeValue('white', 'gray.700');


  return (
    <Box minH='100vh' minW='full' backgroundColor={appBgColor}>
      <Navbar/>
      <Container w='90%' maxW='2000px' p={0}>
        <Flex borderRadius='md' p={4} backgroundColor={boxBgColor} align='center' justify='space-between' >
          <Text fontWeight='600' >Desarrollador Frontend</Text>
          <Image src={flag} h='20px' />
        </Flex>
        <About/>
      </Container>
    </Box>
  );
}

export default App;
