import React from 'react'
import MainImage from '../images/sleep.jpg';
import StruggleImg from '../images/struggle.svg';
import CalmImg from '../images/calm 1.svg';
import MasterImg from '../images/master.svg';
import { Flex, Text, Button, Image, Divider } from '@chakra-ui/react';
import '../App.css';

const Home = () => {
    return (
        <Flex
          flexDir="column"
          justifyContent="space-between"
        >
          <Flex
          mt="3.5rem"
          flexDir="row"
          justifyContent="space-between"
          maxHeight="45%"
        >
        {/* Texts */}
        <Flex
          maxHeight="50%"
          flexDir="column"
          justifyContent="space-between"      
        > 
          <Flex
            flexDir="column"
            justifyContent="space-between"
            fontSize="6xl"
            className="font-bold"     
          >
            <Text>To Learn,</Text>
            <Text mt="-3.5" mb="1.5rem">one must solve</Text>
          </Flex>
          <Flex
            fontSize="2xl"
            className="font-light"
            flexDir="column"
            mb="2rem"
          >
            <Text>
              Gamify the process of learning
              by 
            </Text>
            <Text>
              replacing lecture videos with
            </Text>
            <Text>     
              interactive lessons!
            </Text>
          </Flex>
          <Flex>
            <Button
             size="lg" 
             className="font-medium"
             height="4rem"
             fontWeight="medium"
            >
               Get Started
            </Button>
          </Flex>
        </Flex>
        <Flex

        > {/* Picture */}
          <Image
            flexDir="row"
            justifyContent="flex-end"
            width="110%"
            height="110%" 
            src={MainImage} 
            alt="I Sleep"
          />
        </Flex>
      </Flex>

      {/* edit */}
      <Flex alignSelf="center">
              {/* Column 3 */}
      <Flex
        flexDir="row"
        justifyContent="space-between"
      >
        <Flex
          flexDir="column"
          mt="-15rem"
        >
          <Text
            className="font-medium"
            fontSize="2xl"
          >
            Some struggle required
          </Text>
          <Flex
            position="relative"
            mr="-3rem"
          >
            <Image src={StruggleImg} display="block" ml="auto" mr="auto"/>
            <Text
              className="font-light"
              mt="2rem"
              position="absolute"
              maxWidth="90%"
            >
              The path to excellence is simple,
              but not easy. You will get stuck
              and that’s okay!
            </Text>
            <div className="vertical-line"></div>
          </Flex>
        </Flex>    
      </Flex>    
      {/* second */}
      <Flex
        flexDir="row"
        justifyContent="space-between"
        ml="7rem"
      >
        <Flex
          flexDir="column"
          mt="-15rem"
        >
          <Text
            className="font-medium"
            fontSize="2xl"
          >
            Master, don’t memorize
            
          </Text>
          <Flex
            position="relative"
            mr="-3rem"
          >
            <Image src={MasterImg} display="block" ml="auto" mr="auto"/>
            <Text
              className="font-light"
              mt="2rem"
              position="absolute"
              maxWidth="90%"
            >
              Forget everything you memorized.
              Understand everything from
              bottom to up!
            </Text>
            <div className="vertical-line"></div>
          </Flex>
        </Flex>
      </Flex>
      {/* third */}
      <Flex
        flexDir="row"
        justifyContent="space-between"
        ml="7rem"
      >
        <Flex
          flexDir="column"
          mt="-15rem"
        >
          <Text
            className="font-medium"
            fontSize="2xl"
          >
            Stress less, learn better
          </Text>
          <Flex
            position="relative"
          >
            <Image src={CalmImg} display="block" ml="auto" mr="auto"/>
            <Text
              className="font-light"
              mt="2rem"
              position="absolute"
            >
              Enjoy fun storytelling, guided
              problem solving, and making 
              lots of mistakes while playing!
            </Text>
          </Flex>
        </Flex>
      </Flex>
      </Flex>

        </Flex>
    )
}

export default Home
