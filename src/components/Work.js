import { Heading, Text, Stack, Button, Center } from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';

import SectionHeading from './SectionHeading';

const Work = () => {
    return (
        <Stack w='full' marginTop={5} direction='column' >
            <SectionHeading>Trabajo</SectionHeading>
            <Text textAlign='justify' >
                Quiza esto sea decepcionante para ti reclutador que esta visitando mi pagina,
                pero nunca he trabajado, almenos no en el área de <strong>desarrollo de software</strong> , me he desempeñado como
                auxiliar de análisis clínicos y tambien he sido empleado de un supermercado.
            </Text>
            <Text textAlign='justify' >
                Desde pequeño he tenido un gran <strong>intéres</strong> por el desarrollo de software, razon que me llevo a estudiar
                Ingeniería Informática, carrera de la cual me encuentro proximo a graduarme.
            </Text>
            <Text textAlign='justify' >
                En resumidas cuentas, estoy en busca de <strong>mi primer empleo</strong> como programador/desarrollador , tengo la mejor dispocisión para
                aprender cualquier tecnologia que su proyecto requiera, ademas de poder aportar todo he aprendido hasta el dia de hoy.
            </Text>
            <Center w='full' >
                <Button marginTop={5} colorScheme='teal' marginX='auto' width='200px' rightIcon={<FiDownload/>}>Mi CV</Button>
            </Center>

        </Stack>
    )
}

export default Work
