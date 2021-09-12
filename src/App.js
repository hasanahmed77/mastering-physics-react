import { Flex, Text, Button, Image } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import MainImage from './images/sleep.jpg';

function App() {
  return (
    <Flex
      h="100vh"
      flexDir="column"
      overflow="hidden"
      maxW="2000 px"
      ml="13rem"
      mr="13rem"
    >
      <Navbar/>

      {/* Column 2 */}
      <Flex
        mt="3.5rem"
        flexDir="row"
        justifyContent="space-between"
        maxHeight="45%"
      >
        {/* Texts */}
        <Flex
          max
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
            <Text mt="-3.5">one must solve</Text>
          </Flex>
          <Flex
            fontSize="2xl"
            className="font-light"
            flexDir="column"
            mt="-3"
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
            width="100%"
            height="100%" 
            src={MainImage} 
            alt="I Sleep"
          />
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex>

      </Flex>
    </Flex>
  );
}

export default App;
