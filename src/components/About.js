import { Image, Flex, Box, Heading, Text } from '@chakra-ui/react';
import portrait from '../assets/unnamed.jpg';

const About = () => {
    return (
        <Flex marginTop={5} align='center' direction='column'>
            <Box w='full' marginBottom={5} >
                <Heading as='h2' fontSize='22px'>Miguel Angel Ramos Ramirez</Heading>
                <Text>Estudiante / Programador autodidacta</Text>
            </Box>
            <Image src={portrait} borderRadius='full' style={{border: '2px solid white'}} width='160px' />
        </Flex>
    );
}

export default About;