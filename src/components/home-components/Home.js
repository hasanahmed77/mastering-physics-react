import React from 'react'
import MainImage from '../../images/sleep.jpg';
import StruggleImg from '../../images/struggle.svg';
import CalmImg from '../../images/calm 1.svg';
import MasterImg from '../../images/master.svg';
import { Flex, Text, Button, Image} from '@chakra-ui/react';
import '../../App.css';
import Info from './Info';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    const handleClick = () => history.push('/GetStarted');

    return (
        <Flex
          flexDir="column"
          justifyContent="space-between"
        >
          <Flex
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
             onClick={handleClick}
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

      {/* Column 3 */}
      <Flex flexDir="row" justifyContent="space-between">
      {/* first */}
      <Info 
        heading="Some struggle required"
        body="           
          The path to excellence is simple,
          but not easy. You will get stuck
          and that’s okay!"
        image={StruggleImg}
        vertical={true}
      />
      {/* second */}
      <Info 
        heading="Master, don’t memorize"
        body="           
          Forget everything you memorized.
          Understand everything from
          bottom to up!"
        image={MasterImg}
        vertical={true}
      />
      {/* third */}
      <Info 
        heading="Stress less, learn better"
        body="           
          Enjoy fun storytelling, guided
          problem solving, and making 
          lots of mistakes while playing!"
        image={CalmImg}
        vertical={false}
      />
        </Flex>
      </Flex>
    )
}

export default Home
