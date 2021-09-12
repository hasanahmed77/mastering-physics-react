import { Flex, Text, Button, Image } from '@chakra-ui/react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MainImage from './images/sleep.jpg';

function App() {
  return (
    <Flex
      h="100vh"
      flexDir="column"
      overflow="hidden"
      maxW="2000 px"
      pl="10%"
      pr="10%"
    >
      <Navbar/>
      <Home/>
    </Flex>
  );
}

export default App;
