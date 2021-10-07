import { Flex, Container } from '@chakra-ui/react';
import './App.css';
import Home from './components/home-components/Home';
import Navbar from './components/Navbar';
import GetStarted from './components/GetStarted';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mechanics from './components/mechanics-components/Mechanics';

function App() {
  return (
    <Router>
      <Flex
        h="100vh"
        flexDir="column"
        overflow="hidden"
        maxW="2000 px"
        pl="10%"
        pr="10%"
      >
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/GetStarted">
            <GetStarted />
          </Route>

          <Route exact path="/Mechanics">
            <Mechanics />
          </Route>
        </Switch>

      </Flex>
    </Router>
  );
}

export default App;
