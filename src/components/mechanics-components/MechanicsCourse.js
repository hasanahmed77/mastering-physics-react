import React from 'react';
import { Flex, Text, Button, Image, Container} from '@chakra-ui/react';
import RateOfMovementImg from '../../images/mechanicsCourse/rateOfMovement.png';
import GraphsImg from '../../images/mechanicsCourse/Graphs.png';
import AddingForcesImg from '../../images/mechanicsCourse/AddingForces.png';
import MomentsImg from '../../images/mechanicsCourse/Moments.png';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

const GetStarted = () => {
    const handleClick = () => {
        alert('Not available yet. Coming soon!');
    }

    const history = useHistory();
    const handleClickMechanics = () => history.push('/RateOfMovement');

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
                    Mechanics: A
                </Text>
            </Flex>

            {/* column 2 */}
            <Flex
                flexDir="row"
                justifyContent="space-between"
                mt="3.5rem"
            >
                <Flex><Image onClick={handleClickMechanics} src={RateOfMovementImg}/></Flex>
                <Flex><Image src={GraphsImg}/></Flex>
                <Flex><Image src={AddingForcesImg}/></Flex>
                <Flex><Image src={MomentsImg}/></Flex>
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
                    <ChevronRightIcon ml="-2" />All courses
                </Button>
            </Flex>
        </Flex>
    );
}

export default GetStarted
