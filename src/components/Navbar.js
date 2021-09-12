import React from 'react'
import { Flex, Image, Link, Text, Button } from '@chakra-ui/react';
import Logo from '../images/logo.svg'
import '../App.css'

const Navbar = () => {
    return (
        <Flex
        w="100%"
        flexDir="column"
        height="10%"
        className="font-medium"
      >
        <Flex
          flexDir="row"
          justifyContent="space-between"
          mt="0.7rem"
        >
          <Flex
          justifyContent="space-between"
            as="nav"
          >
          <Link>
          <Image src={Logo}
            alt="PHYSICS" 
            w="100" 
            h="100"
            />
          </Link>
          </Flex>
          <Flex fontSize="xl"  alignItems="center" >
                <Link _hover={{ textDecor:"none"}} >
                    <Text pl="2rem">Home</Text>
                </Link>
                <Link _hover={{ textDecor:"none"}}>
                    <Text pl="2rem">About</Text>
                </Link>
                <Link _hover={{ textDecor:"none"}}>
                    <Text ml="2rem">Email</Text>
                </Link>
                <Link _hover={{ textDecor:"none"}}>
                    <Button ml="2rem" size="lg" fontWeight="medium">Sign up</Button>
                </Link>
            </Flex>
        </Flex>
      </Flex>
    )
}

export default Navbar
