import { Heading, Text, Stack, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { FaBaby, FaUserGraduate } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';

import itt from '../assets/ITT.jpg'
import SectionHeading from './SectionHeading';

const Bio = () => {
    return (
        <Stack w='full' marginTop={5} direction='column'>
            <SectionHeading>Bio</SectionHeading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={FaBaby} />
                    (1999) Nací en Tijuana Baja California.
                </ListItem>
                <ListItem>
                    <ListIcon as={HiDesktopComputer} />
                    (2004) Tengo mi primer acercamiento a la informatica gracias a la vieja PC de mi padre.
                </ListItem>
                <ListItem>
                    <ListIcon as={ImBooks} />
                    (2018) Ingreso a la carrera de IngenierÍa Informática en el Instituto Tecnologico de Tijuana (ITT) y comienzo a tomar cursos de desarrollo web.
                </ListItem>
                <Image src={itt} alt='Instituto Tecnologico de Tijuana' borderRadius='lg' />
                <ListItem>
                <ListIcon as={FaUserGraduate} />
                   (2023) Año estimado de mi graduación.
                </ListItem>
            </List>
        </Stack>
    )
}

export default Bio
