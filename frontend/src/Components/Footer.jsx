import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
function Footer() {
  const pro = [
    "How it works",
    "Features",
    "Mobile app",
    "Use case ",
    "Pricing",
    "Guides",
    "Customer Reviews",
    "Start Free",
  ];
  const res = [
    "Time Tracking Library",
    "About",
    "Terms of Use",
    "Sitemap",
    "Free Timesheet templates",
    "Start",
    "Free Timesheet templates",
    "est Time Tracking Apps of 2022",
  ];
  const use = [
    "Project billing",
    "Time reports and Project ",
    "Attendance and Absence tracking",
    "Expense tracking",
    "Calculating project profitability",
    "Timesheet time tracking",
  ];

  const inte = ["QuickBooks", "Zapier"];
  const soc = ["Facebook", "Twitter"];

  return (
    <Box className="footer-container">
      <Box className="footer-inner-container">
        <Box className="logo-footer" mr="3%">
          <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png"></Image>
          <Text>© 2022 My Hours.</Text>
          <Text>All rights reserved.</Text>
        </Box>

        <Box>
          <Heading size={"md"} align="left">
            {" "}
            Product
          </Heading>

          {pro.map((e) => (
            <Text className="footer-text">{e}</Text>
          ))}
        </Box>
        <Box>
          <Heading size={"md"} align="left">
            {" "}
            Resources
          </Heading>

          {res.map((e) => (
            <Text className="footer-text" align="left">
              {e}
            </Text>
          ))}
        </Box>
        <Box>
          <Heading size={"md"} align="left">
            Use Cases
          </Heading>

          {use.map((e) => (
            <Text className="footer-text">{e}</Text>
          ))}
        </Box>
        <Box>
          <Heading size={"md"} align="left">
            Integration
          </Heading>

          {inte.map((e) => (
            <Text className="footer-text">{e}</Text>
          ))}
        </Box>
        <Box ml="1rem">
          <Heading size={"md"} align="left">
            Social
          </Heading>

          {soc.map((e) => (
            <Text className="footer-text">{e}</Text>
          ))}
        </Box>
      </Box>
      <Text color="#DBF1FF" fontSize="2xl" align="center" mt="30px">
        Looking for employee attendance and absence tracking? Visit
        <Box as="span" fontSize="2xl" fontWeight="700" ml="4px">
          All Hours.
        </Box>
      </Text>
    </Box>
  );
}

export default Footer;
