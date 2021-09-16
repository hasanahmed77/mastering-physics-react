import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react';
import '../../App.css';

const Info = ({ heading, body, image, vertical}) => {
    return (
        <Flex
        flexDir="row"
        justifyContent="space-between"
        // borderRight="black"
        // padding-right="2rem"
      >
        <Flex
          flexDir="column"
          mt="-15rem"
        >
          <Text
            className="font-medium"
            fontSize="2xl"
          >
            {heading}
          </Text>
          <Flex
            position="relative"
          >
            <Image src={image} display="block" ml="auto" mr="auto"/>
            <Text
              className="font-light"
              mt="2rem"
              position="absolute"
            >
              {body}
            </Text>
            {/* {vertical && <div className="vertical-line"></div>}  */}
          </Flex>
        </Flex>
      </Flex>
    )
}

export default Info
