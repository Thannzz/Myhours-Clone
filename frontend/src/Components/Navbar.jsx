import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <Box
      className="container"
      boxShadow="md"
      pos="sticky"
      // pos="fixed"
      w="100%"
      // zIndex="100"
      top="0px"
      bg="white"
    >
      <Box>
        <Image
          width="150px"
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
          alt="Logo"
        />
      </Box>
      <Box className="rightside">
        <Box>How it Works</Box>
        <Box>Use cases</Box>
        <Box>Pricing</Box>
        <Box>Support</Box>
        <Box>
          <Link to="/SignIn">Sign in</Link>
        </Box>
        <Box
          className="navbtn"
          as="button"
          borderRadius="md"
          bg="#3B8FC2"
          color="white"
          px={4}
          py={2}
        >
          <Link to="/SignUp">Get My Hours Free</Link>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
