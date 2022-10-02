import { Box, Text, Image, SimpleGrid, Heading } from "@chakra-ui/react";
import Footer from "./Footer";
import "./Home.css";
import MobileNav from "./mobileNav";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <Box as="main" mt="130px">
      <Box px="60px" border="3px" borderColor="blue">
        <Text
          fontSize={[30,35,40,85]}
          width="80%"
          align="center"
          m="auto"
          fontWeight="200"
          mt="60px"
        >
          <Box as="span" fontWeight="600" ml="1%" mr="1%">
            Organize
          </Box>
          projexts,
          <Box as="span" fontWeight="600" ml="1%">
            Track
          </Box>
          time and
          <Box as="span" fontWeight="600" ml="1%" mr="1%">
            Report
          </Box>
          you work.
        </Text>
        <br />
        <Text fontSize="28px" m="auto" align="center">
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

        <Box
          width="60%"
          border={"0px"}
          mt="50px"
          mb="50px"
          ml="30%"
          display={"flex"}
        >
          <Image
            width="23%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png"
            alt="icon"
          />
          <Image
            width="23%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png"
            alt="icon"
          />
          <Image
            width="23%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png"
            alt="icon"
          />
        </Box>

        <Box
          justifyContent={"space-between"}
          width={"80%"}
          border="0px"
          m="auto"
          display={"flex"}
        >
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png"
            alt="image"
          />
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png"
            alt="image"
          />
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png"
            alt="image"
          />
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png"
            alt="image"
          />
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png"
            alt="image"
          />
          <Image
            width={"10%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png"
            alt="image"
          />
        </Box>

        <SimpleGrid
          columns={[1, 1, 2, 2]}
          border={"0px"}
          width="95%"
          m="auto"
          gap="20px"
          mt="120px"
        >
          <Box width="70%" border={"0px"}>
            <Heading
              as="h3"
              size={"lg"}
              fontWeight="600"
              letterSpacing={"0px"}
              mb="15px"
            >
              Coordinate your team, projects and tasks
            </Heading>
            <Text fontSize={"19px"} mb="15px">
              Get out of your inbox mess: create projects, assign tasks and
              write-down or attach details. Track project profitability with
              hourly rates. Set up budgets and get reminded when you’re close.
            </Text>
            <Text fontSize={"18px"} fontWeight="500" color={"#375D75"}>
              <Box>
                “Excellent time tracker to manage your tasks! It changed the way
                I organize myself, I'm more productive since I used it!” -
                Guadalupe G., Art Director
              </Box>
            </Text>
          </Box>
          <Box>
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png"
              alt="image"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 1, 2, 2]}
          border={"0px"}
          width="95%"
          m="auto"
          gap="20px"
          mt="120px"
        >
          <Box>
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png"
              alt="image"
            />
          </Box>
          <Box width="70%" border={"0px"} align="left" ml="25%">
            <Heading
              as="h3"
              size={"lg"}
              fontWeight="600"
              letterSpacing={"0px"}
              mb="15px"
            >
              Track your work hours, expenses and more
            </Heading>
            <Text fontSize={"19px"} mb="15px">
              With My Hours you can track all your work. Add a detailed
              description to your time logs and expenses. We know time tracking
              is a hassle, so we’ve designed it to be super fast.
            </Text>
            <Text fontSize={"18px"} fontWeight="500" color={"#375D75"}>
              <Box as="i">
                “A wonderful product. We no longer have to use multiple programs
                to track time, projects, PTO, etc.” - Katie L., Office
                Coordinator
              </Box>
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          border={"0px"}
          width="95%"
          m="auto"
          gap="20px"
          mt="120px"
        >
          <Box width="70%" border={"0px"}>
            <Heading
              as="h3"
              size={"lg"}
              fontWeight="600"
              letterSpacing={"0px"}
              mb="15px"
            >
              Create great-looking reports
            </Heading>
            <Text fontSize={"19px"} mb="15px">
              Turn your work into dazzling reports with confidence. From
              Dashboard to more advanced time analytics. No need for extra
              spreadsheet work, even though you can export your data.
            </Text>
            <Text fontSize={"18px"} fontWeight="500" color={"#375D75"}>
              <Box as="i">
                “My Hours is a super easy to use time tracker and great for
                sending hourly reports to clients for billable work” - Erin A.
                Business owner
              </Box>
            </Text>
          </Box>
          <Box>
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png"
              alt="image"
            />
          </Box>
        </SimpleGrid>
        <Heading
          _hover={"under-line"}
          align="center"
          fontWeight={"400"}
          color="#3B8FC2"
          size="lg"
          mt="100px"
        >
          <Box as="u"> See how My Hours works in detail</Box>
        </Heading>

        <Heading
          as="h3"
          size="xl"
          align="center"
          mt="100px"
          mb="100px"
          fontWeight="600"
          color="#375D75"
        >
          A flexible tool for all types of organizations
        </Heading>

        <SimpleGrid columns={[1, 2, 3, 3]} width={"80%"} m="auto">
          <Box>
            <Text className="flexible-Text"  >Billing</Text>
            We need to bill our clients with flexible hourly rates.
          </Box>
          <Box>
            {" "}
            <Text className="flexible-Text">Profitability</Text>
            We would like to calculate the profitability of our projects.
          </Box>
          <Box>
            <Text className="flexible-Text" >Time tracking</Text>We want
            to track time on projects and tasks.
          </Box>
          <Box>
            <Text className="flexible-Text">Attendance</Text>We need to
            track employee attendance/absence and tasks.
          </Box>
          <Box>
            <Text className="flexible-Text">Client reporting</Text>I
            need to report the time spent to clients or invoice them.
          </Box>
          <Box>
            <Text className="flexible-Text">Find more use cases</Text>
          </Box>
        </SimpleGrid>

        <Heading
          as="h3"
          size="xl"
          align="center"
          mt="50px"
          fontWeight="600"
          color="#375D75"
        >
          Have questions? We're here
        </Heading>
        <br />
        <Text w="50%" align={"center"} fontSize="20px" m="auto">
          It's always nice to have someone to talk to when facing new software.
          Get in touch and we'll try our best to help you out.
        </Text>

        <SimpleGrid columns={[1, 1, 2, 2]} mt="110px">
          <Box>
            <Heading
              as="h3"
              size="xl"
              align="center"
              mt="100px"
              fontWeight="600"
              color="#375D75"
              w="70%"
              m="auto"
              mb="40px"
            >
              Waste no more time, jump right in!
            </Heading>
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
            >
              Get Started It's Free
            </Box>
            <Text w="80%" align={"center"} fontSize="18px" m="auto" mt="30px">
              My Hours is Free to use for teams of any size. Pro paid plan comes
              with additional features like invoicing, admin controls and
              priority support.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              size="xl"
              align="left"
              mt="100px"
              fontWeight="400"
              color="#375D75"
              w="70%"
              m="auto"
            >
              Need more info? Get a product demo.
            </Heading>
            <Box
              mt="40px"
              as="button"
              fontSize={"22px"}
              borderRadius="md"
              color="black"
              px="30px"
              py={"15px"}
              display={"block"}
              align="center"
              border={"1px"}
              _hover={{ bg: "#3B8FC2", border: "none" }}
              ml="15%"
            >
              Talk to our Team
            </Box>
            <Text w="70%" align="left" fontSize="18px" ml="15%" mt="30px">
              Teams of 6+ are welcome to book a personalized demo to see how My
              Hours works in detail.
            </Text>
          </Box>
        </SimpleGrid>

       
      </Box>
      <Footer/>
    </Box>
    </>
  );
}
export default Home;
