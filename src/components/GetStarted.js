import React from 'react';
import { Flex, Text, Button, Image, Container} from '@chakra-ui/react';
import MechanicsImg from '../images/get-started/mechanics.png';
import WavesImg from '../images/get-started/waves.png';
import ElectricityImg from '../images/get-started/electricity.png';
import FluidsImg from '../images/get-started/fluids.png';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

const GetStarted = () => {
    const handleClick = () => {
        alert('Not available yet. Coming soon!');
    }

    const history = useHistory();
    const handleClickMechanics = () => history.push('/Mechanics');

    return (
        <Flex
            flexDir="column"
            justifyContent="space-between"
        >
            {/* column 1 */}
            <Flex>
                <Text
                    fontSize="6xl"
                    className="font-bold"
                >
                    AS Courses: Unit 1
                </Text>
            </Flex>

            {/* column 2 */}
            <Flex
                flexDir="row"
                justifyContent="space-between"
                mt="3.5rem"
            >
                <Flex><Image onClick={handleClickMechanics} src={MechanicsImg}/></Flex>
                <Flex><Image src={FluidsImg}/></Flex>
                <Flex><Image src={ElectricityImg}/></Flex>
                <Flex><Image src={WavesImg}/></Flex>
            </Flex>

            {/* column 3 */}
            <Flex
                alignSelf="center"
                mt="8rem"
            >
                <Button
                    height="4rem"
                    width="10rem"
                    size="lg"
                    fontWeight="medium"
                    onClick={handleClick}
                >
                    <ChevronRightIcon ml="-2" />Next Unit
                </Button>
            </Flex>
        </Flex>
    );
}

export default GetStarted
