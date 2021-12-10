import { Flex, Box, Heading, Button, useColorModeValue, Link, Container, Text, Image } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Router, Route } from 'react-router-dom';

import { useEffect } from 'react';

import flag from './assets/mexico.svg';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Bio from './components/Bio';

const App = () => {

  const appBgColor = useColorModeValue('#f0e7db', 'gray.900');
  const boxBgColor = useColorModeValue('white', 'gray.700');

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: '100vh'
    },
    show: {
      opacity: 1,
      y: 0
    },
    exit: {
      y: '100vh',
      transition: 'easeInOut',
      opacity: 0,
      duration: 0.6
    }
  }

  return (
    <Box minH='100vh' minW='full' backgroundColor={appBgColor}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.div variants={variants} initial='hidden' animate='show' exit='exit' >
          <Container w='90%' maxW='500px' p={0} marginTop={5} minH='100vh'>
            <Flex borderRadius='md' p={4} backgroundColor={boxBgColor} align='center' justify='space-between' >
              <Text fontWeight='600' >Desarrollador Frontend</Text>
              <Image src={flag} h='20px' borderRadius='sm' />
            </Flex>
            <About />
            <Work />
            <Bio />
          </Container>
          <Flex as='footer'>Footer</Flex>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default App;
