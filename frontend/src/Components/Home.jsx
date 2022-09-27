import { Box, Text,Image } from "@chakra-ui/react";

function Home() {
  return (
    <Box as="main" mt="130px" >
      <Box px="60px" border="3px" borderColor="blue">
        <Text
          fontSize="80px"
          width="80%"
          align="center"
          m="auto"
          fontWeight="200"
          mt="60px"
          
        >
          <Box as="span" fontWeight="600"  ml="1%"  mr="1%">
            Organize
          </Box>
          projexts,
          <Box as="span" fontWeight="600"  ml="1%">
            Track
          </Box>
          time and
          <Box as="span" fontWeight="600" ml="1%"  mr="1%" >
            Report
          </Box>
          you work.
        </Text>
        <br />
        <Text fontSize="28px" m="auto" align="center" >
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.{" "}
          <Box as="span" fontWeight="600" color="#375D75">
            All-in-one free time tracking software.
          </Box>
        </Text>
        <Box
          as="button"
          fontSize={"22px"}
          borderRadius="md"
          bg="#3B8FC2"
          color="white"
          px="30px"
          py={"15px"}
          m="auto"
          display={"block"}
          align="center"
          mt="84px"
         
        >
          Get Started It's Free
        </Box>
        <Image
          width="90%"
          m="auto"
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png"
          alt="image"
        />
         <Text
          display={"block"}
          align="center"
          fontSize={"30px"}
          letterSpacing="0px"
          mt="80px"
        >
          Trusted by more than
          <Box as="span" fontWeight={"700"} ml="1%" mr="1%">
            100.000 businesses
          </Box>
          worldwide
        </Text>
      </Box>
    </Box>
  );
}
export default Home;
