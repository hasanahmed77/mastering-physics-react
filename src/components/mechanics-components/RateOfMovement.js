import { Flex, Text, Image, Progress, Stack } from '@chakra-ui/react'
import React from 'react'
import SpeedEqnImg from '../../images/mechanicsCourse/rateOfMovement/speedEqn.svg'
import ThirdSection from './ThirdSection'

const RateOfMovement = () => {


    return (
        <Flex flexDir="row" justifyContent="space-between" >
            {/* LEFT ROW */}
            <Flex flexDir="column" justifyContent="space-between"  className="font-light" fontSize="2xl" maxW="40%" maxH="90%">
                <Text className="font-bold" fontSize="6xl" mb="2rem">Rate of movement</Text>
                <Text>
                    Speed is the rate of change of distance that is the chagne in the distance per unit time. 
                    The unit for speed is m/s. It does not have to have any specific direction. But yet has a value determining how fast an object is travelling. 
                    Thus, it is a scalar quantity.
                </Text>
                <Image 
                    src={SpeedEqnImg} 
                    alt="speed = distance/time"
                    width="70%"
                    height="70%"
                />
                <Text>We calculate the speed using this formula. The time must be in seconds (s) and the distance must be in meters (m).</Text>
            </Flex> 
            {/* RIGHT ROW */}
            <Flex>
                <ThirdSection />
            </Flex>
        </Flex>
    )
}

export default RateOfMovement
