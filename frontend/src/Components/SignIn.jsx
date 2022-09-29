import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logins } from "./auth/auth.action";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [data, setData] = useState({});

  const { token, isAuth } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      console.log(token);
      navigate("/");
    }
  }, [isAuth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);
  const handleClick = () => {
    dispatch(Logins(data));
  };

  return (
    <Container>
      <Box mt="150px" p="30px" pt="50px" boxShadow="lg">
        <Image
          align={"center"}
          m="auto"
          w="200px"
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt="company logo"
        />
        <br />
        <Heading as="h3" size="lg" fontWeight={"600"}>
          Sign in
        </Heading>
        <br />
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </FormControl>

        <Flex alignItems="center" mt="15px" mb="20px">
          <Button color="white" bg="#3B8FC2" onClick={handleClick}>
            Sign in
          </Button>
          <Spacer />
          <Text color="#3B8FC2">Reset Password</Text>
        </Flex>
        <hr />
        <Text fontSize={"14px"} color="#3B8FC2">
          New to My Hours? Sign up
        </Text>
      </Box>
    </Container>
  );
}

export default SignIn;
