import { Box, Container, Heading, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import {HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";
import "./MobileNav.css"
import {Link} from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
function MobileNav() {
  return (
    <>
    <Container align="left" className="MobileNav">
      <Box  display={"flex"} justifyContent="space-between" mt={"3%"} >
        <Image width="35%" src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"></Image>
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem >
        How it works
    </MenuItem>
    <MenuItem >
      Use cases
    </MenuItem>
    <MenuItem >
    Pricing
    </MenuItem>
    <MenuItem >
     Support
    </MenuItem>
    <MenuItem >
     <Link to="SignIn">Sign in</Link>
    </MenuItem>
    <MenuItem >
    <Box
          as="button"
          fontSize={"10px"}
          
          borderRadius="md"
          bg="#3B8FC2"
          color="white"
          px="15px"
          py={"8px"}
          m="auto"
          display={"block"}
          align="center"
          mt="5px"
        >
         <Link to="/SignUp">Get Started It's Free</Link> 
        </Box>
    </MenuItem>
  </MenuList>
</Menu>
      </Box>
      {/* <Box lineHeight={"55px"} fontSize={"20px"}>
      <Box>How it works</Box>
      <Box>Use cases</Box>
      <Box>pricing</Box>
      <Box>Support</Box>
      <Box>Sign in</Box>
      </Box> */}
      {/* <Box
          as="button"
          fontSize={"20px"}
          
          borderRadius="md"
          bg="#3B8FC2"
          color="white"
          px="25px"
          py={"10px"}
          m="auto"
          display={"block"}
          align="center"
          mt="50px"
        >
          Get Started It's Free
        </Box> */}
        </Container>
    </>
  );
}

export default MobileNav;
