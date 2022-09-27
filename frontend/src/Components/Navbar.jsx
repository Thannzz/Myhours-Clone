
import { Box, Image } from "@chakra-ui/react";


import "./Navbar.css";
function Navbar() {
  return (
    <Box
      className="container"
      boxShadow="md"
      pos={"fixed"}
      w="100%"
      zIndex="200"
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
        <Box>
           How it Works
        </Box>
        <Box>
           Use cases
        </Box>
        <Box>
          Pricing
        </Box>
        <Box>
          Support
        </Box>
        <Box>
          Sign in
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
          Get My Hours Free
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;