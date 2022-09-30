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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function DetailPage() {
  const maindata = useContext(AuthContext);
  console.log(maindata);
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    maindata.isAuthData = {
      ...maindata.isAuthData,

      company_name: data.companyName,
      employee: data.companySize,
      country: data.country,
      number: data.mobileNumber,
    };
    // console.log(maindata.isAuthData);
  };

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

          <Input type="text" onChange={handleChange} name="companyName" />
          <FormLabel>COUNTRY</FormLabel>
          <Text align={"left"} mb="1%">
            We will adapt your experience to the specifics region
          </Text>
          <Select
            mb="1%"
            bgColor={"#dceefa"}
            onChange={handleChange}
            name="country"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </Select>

          <FormLabel lh="1%">COMPANY SIZE</FormLabel>
          <Text fontSize={"14px"} align={"left"} mt="1%">
            So we can adapt to your needs better
          </Text>
          <Input
            type="number"
            onChange={handleChange}
            name="companySize"
            placeholder="No of member"
          />
        </FormControl>

        <FormLabel mt="1%">MOBILE NUMBER (OPTIONAL)</FormLabel>

        <Input
          type="number"
          onChange={handleChange}
          placeholder="Enter mobile"
          name="mobileNumber"
        />

        <Button color="white" bg="#3B8FC2" m="auto" mt="5%">
          <Link to="/" onClick={handleClick}>
            Create New Company
          </Link>
        </Button>
      </Box>
    </Container>
  );
}

export default DetailPage;

// name: { type: String, required: true },
// email: { type: String, required: true, unique: true },
// password: { type: String, required: true ,  },
// companyName:{type:String , required:true},
// country:{type:String ,required:true },
// companySize:{type:Number , required:true},
// mobileNumber:{type:Number}
