import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useMenuState,
} from "@chakra-ui/react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const { state, dispatch } = useContext(AuthContext);

  const loginUser = async () => {
    try {
      await axios
        .post("http://localhost:8080/auth/login", loginData)
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("name", data.data.user.name);
          dispatch({ type: "loginSuccess", payload: data.data });
        });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  if (state.isLoggedIn) {
    return <Navigate to="/tasks" />;
  }
  return (
    <HStack w="100%">
      <Box
        w="43%"
        h="100vh"
        bgColor="#53dffa"
        position="sticky"
        left="0"
        top="0"
        bottom="0"
        right="0"
      >
        <HStack mt="50px" justifyContent="space-evenly" alignItems="center">
          <Box>
            <Image src="https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg" />
          </Box>
          <Box>
            <Text color="white">
              <a href="https://www.bitrix24.in/">← Back to site</a>
            </Text>
          </Box>
        </HStack>
        <Box color="white" textAlign="left" ml="12%" mt="33%">
          <Heading fontSize="38px" fontWeight="medium">
            Your company. <br /> United.
          </Heading>
          <Text fontSize="25px" mt="2%">
            Free. Unlimited. Online
          </Text>
        </Box>
        <Flex mt="22%" flexDirection="row-reverse" mr="12%">
          <Button border="1px solid white" p="4%" variant="ghost" color="white">
            English
          </Button>
        </Flex>
      </Box>
      <Box w="57%" border="1px solid red" h="130vh">
        <Heading mt="15%" ml="10%" fontWeight="normal" textAlign="left">
          Bitrix24 Login
        </Heading>
        <Button>
          <NavLink to="/signup">signup</NavLink>
        </Button>
        <Box m="5% 10%" borderBottom="1px solid #e2e8f0"></Box>
        <Text textAlign="left" mt="5%" mb="2%" ml="10%">
          Enter phone number or email
        </Text>
        <Box>
          <Input
            type="text"
            h="50px"
            border="2px solid grey"
            w="80%"
            name="email"
            onChange={(e) => handleOnChange(e)}
            placeholder="email"
          />
          <Input
            type="text"
            name="password"
            onChange={(e) => handleOnChange(e)}
          ></Input>
        </Box>
        <Box>
          <Button onClick={() => loginUser()}>Login</Button>
        </Box>
        <Text mt="5%">or</Text>
        <Text mt="5%">Log in with</Text>
        <HStack justifyContent="space-around">
          <Box>
            <Box>
              <Box>
                <Image
                  w="40px"
                  h="40px"
                  src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
                />
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Box>scan code</Box>
        </HStack>

        <Box mt="20%">
          <Button
            mr="20px"
            bgColor="#9dcf00"
            w="150px"
            h="50px"
            borderRadius="25px"
            color="white"
          >
            NEXT
          </Button>
          <span>FORGET PASSWORD?</span>
        </Box>
      </Box>
    </HStack>
  );
}
