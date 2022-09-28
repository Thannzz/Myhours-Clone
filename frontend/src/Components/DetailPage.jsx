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
 
    Select,
    Spacer,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import {Link} from "react-router-dom"

function DetailPage() {
  return (
    <Container>
      <Box mt="150px" p="30px" pt="50px" boxShadow="lg">
        <Image
          align={"left"}
          w="200px"
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt="company logo"
        />
        <br />
        <Heading as="h3" size="lg" fontWeight={"600"} align={"left"}>
        Details about your company
        </Heading>
        <br />
        <FormControl>
          <FormLabel>COMPANY NAME</FormLabel>
 
          <Input type="text" />
          <FormLabel>COUNTRY</FormLabel>
          <Text align={"left"} mb="1%">We will adapt your experience to the specifics region</Text>
          <Select mb="1%" bgColor={"#dceefa"}>   

  <option value='option1'>India</option>
  <option value='option2'>USA</option>
  <option value='option3'>China</option>
</Select>

          <FormLabel lh="1%">COMPANY SIZE</FormLabel>
          <Text fontSize={"14px"} align={"left"} mt="1%">
        So we can adapt to your needs better
        </Text>
          <Input  type="text" />
        </FormControl>
       
  

        <FormLabel mt="1%">MOBILE NUMBER (OPTIONAL)</FormLabel>
          
          <Input type="text" />

        <Button color="white" bg="#3B8FC2" m="auto" mt="5%">
          <Link to="/">Create New Company</Link>
        </Button>
      </Box>
    </Container>
  )
}

export default DetailPage