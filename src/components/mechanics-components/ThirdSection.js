import { Flex, Text, Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Progress, Button, extendTheme, Image } from '@chakra-ui/react'
import CarImg from '../../images/mechanicsCourse/rateOfMovement/car.png'


const ThirdSection = () => {
    const [progress, SetProgress] = useState(10);

    return (
        <Flex flexDir="column" justifyContent="space-between"  >
            <Text className="font-bold" fontSize="6xl" alignSelf="center" mb="2rem">Speed</Text>
            <Stack>
                <Progress colorScheme="cyan" hasStripe value={progress} width="21rem" mb="3rem" alignSelf="center" />               
            </Stack>
            <Button 
                bg="#000000" 
                color="#fff" 
                size="lg" 
                fontWeight="medium"
                width="21rem"
                alignSelf="center"
                height="4.5rem"
                _hover={{ bg: "#000000" }}
            >
                Continue
            </Button>
            <Image 
                width="100%"
                height="100%"
                src={CarImg} 
            />
        </Flex>
    )
}

export default ThirdSection
