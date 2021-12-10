import { Heading, Text, Stack, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { FaBaby, FaUserGraduate } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';

import itt from '../assets/ITT.jpg'

const Bio = () => {
    return (
        <Stack w='full' marginTop={5} direction='column'>
            <Heading
                as='h2'
                textDecoration='underline'
                textUnderlineOffset={6}
                textDecorationColor='#525252'
                textDecorationThickness={4}
                fontSize='22px'
                paddingBottom={2}
            >
                Bio
            </Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={FaBaby} />
                    (1999) Naci en Tijuana Baja California.
                </ListItem>
                <ListItem>
                    <ListIcon as={HiDesktopComputer} />
                    (2004) Tengo mi primer acercamiento a la informatica gracias a la vieja pc de mi padre.
                </ListItem>
                <ListItem>
                    <ListIcon as={ImBooks} />
                    (2018) Ingreso a la carrera de Ingenieria Informatica en el Instituto Tecnologico de Tijuana (ITT) y comienzo a tomar cursos de desarrollo web.
                </ListItem>
                <Image src={itt} alt='Instituto Tecnologico de Tijuana' borderRadius='lg' />
                <ListItem>
                <ListIcon as={FaUserGraduate} />
                   (2023) Fecha estimada de mi graduación.
                </ListItem>
            </List>
        </Stack>
    )
}

export default Bio
