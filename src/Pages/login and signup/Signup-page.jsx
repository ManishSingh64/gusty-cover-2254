import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const SignupPage = () => {
  const { state, dispatch } = useContext(AuthContext);

  const [tasks, setTasks] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks({ ...tasks, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(tasks);
    registerUser();
  };

  const registerUser = async () => {
    try {
      await axios
        .post("http://localhost:8080/auth/register", tasks)
        .then((data) => {
          dispatch({ type: "signupSuccess", payload: data.data });
        });
    } catch (err) {
      alert(err);
    }
  };

  if (state.isSignuped) {
    return <Navigate to="/login" />;
  }
  return (
    <Box boxShadow="lg" w="30%" p="2%" m="auto" rounded="md">
      <Box>
        <Heading mt="20px" fontSize="xl">
          Enter your Name
        </Heading>
        <Input
          w="80%"
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          required
        />
        <Heading fontSize="xl" mt="20px">
          Enter your email
        </Heading>
        <Input
          w="80%"
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <Heading mt="20px" fontSize="xl">
          Enter your password
        </Heading>
        <Input
          w="80%"
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <Button
          size="lg"
          bgColor="blue"
          mt="20px"
          color="white"
          onClick={(e) => handleClick(e)}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignupPage;
