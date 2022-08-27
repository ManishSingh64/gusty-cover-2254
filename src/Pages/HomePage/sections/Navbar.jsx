import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <HStack
      justifyContent="space-around"
      bgColor="white"
      alignItems="center"
      position="sticky"
      top="0"
      h="70px"
      boxShadow="md"
      zIndex="1"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
          <Text fontSize="44px" color="#0ebaba" fontWeight="bold">
            Bitrix
          </Text>

        </Box>
        <HStack>
          <Text color="blue" fontSize="44px">
            24
          </Text>
          <Image
            ml="50px"
            w="25px"
            h="25px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XssYOR5BMYBnenKZ5iJVBIpQsx1M_4pg_zVj_ppEdWZdv9CPbGtMTd9FZsnN4lM4SCc&usqp=CAU"
          />
        </HStack>
      </Box>
      <HStack gap="4%">
        <Box>TOOLS</Box>
        <Box>PRICING</Box>
        <Box>SOLUTIONS</Box>
        <Box>PARTNERS</Box>
        <Box>APPS</Box>
        <Box>BLOG</Box>
        <Box>SUPPORT</Box>
      </HStack>
      <HStack gap="10%">
        <Button bgColor='blue.400'>
          <Link to="/signup">Signup</Link>
        </Button>
        <Button variant='ghost' _hover={{bgColor:"blue.400"}} >
          <Link to="/login">LogIn</Link>
        </Button>
      </HStack>
    </HStack>
  );
}
