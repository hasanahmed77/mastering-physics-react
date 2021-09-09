import { Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <Flex
      h="100vh"
      flexDir="row"
      overflow="hidden"
      maxW="2000 px"
    >
      {/* navbar */}
      <Navbar/>
      {/* Column 2 */}
      <Flex>

      </Flex>

      {/* Column 3 */}
      <Flex>

      </Flex>
    </Flex>
  );
}

export default App;
