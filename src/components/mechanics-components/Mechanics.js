import { Flex, Text, Image, Button, Link } from '@chakra-ui/react'
import React from 'react'
import MechanicsImg from '../../images/mechanics-start.png'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';
import { Link as ReachLink } from "react-router-dom";

const Mechanics = () => {
    const history = useHistory();
    const handleClick = () => history.push('/GetStarted');

    return (
        <Flex
            flexDir="column"
            justifyContent="space-between"
        >
            {/* main */}
            <Flex
                flexDir="row"
                justifyContent="space-between"
            >
                <Flex flexDir="column" justifyContent="space-between" maxW="40%" fontSize ="2xl" className="font-light">
                    <Text fontSize="6xl" className="font-bold">Mechanics</Text>
                    <Text className="font-medium">Learn all about motion & energy</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                    <Text>ut labore et dolore magna aliqua. Ut enim ad minim veniam.ut labore et dolore magna aliqua. Ut enim ad minim veniam.ut labore et dolore magna aliqua. </Text>
                </Flex>
                <Flex>
                    <Link>
                        <Image src={MechanicsImg}/>
                    </Link>
                </Flex>
            </Flex>
            {/* button */}
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
    )
}

export default Mechanics
