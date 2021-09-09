import React from 'react'
import { Flex, Image, Link, Text, Button } from '@chakra-ui/react';
import Logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <Flex
        w="100%"
        flexDir="column"
        height="10%"
      >
        <Flex
          flexDir="row"
          justifyContent="space-between"
          ml="10rem"
          mr="10rem"
          mt="0.5rem"
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
          <Flex fontSize="xl" fontWeight="medium" alignItems="center" >
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
                    <Button ml="2rem" size="lg">Sign up</Button>
                </Link>
            </Flex>
        </Flex>
      </Flex>
    )
}

export default Navbar
