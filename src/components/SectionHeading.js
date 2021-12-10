import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }) => {
    return (
        <Heading
            as='h2'
            textDecoration='underline'
            textUnderlineOffset={6}
            textDecorationColor='#525252'
            textDecorationThickness={4}
            fontSize='22px'
            paddingBottom={2}
        >
            {children}
        </Heading>
    )
}

export default SectionHeading;