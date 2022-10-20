import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  DownloadIcon,
  ExternalLinkIcon,
  LinkIcon,
} from "@chakra-ui/icons";

import axios from "axios";

import Sidebar from "../Components/Sidebar";

const getProjects = async (token) => {
  let res = await axios.get("https://myhoursclone.herokuapp.com/projects", {
    headers: {
      token: token,
    },
  });
  return res.data;
};

export default function Reports() {
  const [totalHours, setTotalHours] = useState(0);
  const [amount, setAmount] = useState(0);
  const [budSpent, setBudSpent] = useState(0);
  const [projects, setProjects] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    getProjects(token).then((res) => setProjects(res));
  }, []);
  useEffect(() => {
    projects.map((item) => {
      setTotalHours((prev) => prev + item.hours);
      setAmount((prev) => prev + item.billingAmount);
      setBudSpent((prev) => prev + item.budgetSpent);
    });
  }, [projects]);
  // console.log("tokrn :", token);
  return (
    <>
      <Flex w="100%" h="auto">
        <Sidebar />

        <Box p="1rem" height="auto" w="100%">
          <Flex mb="1rem">
            <Text fontSize="4xl" fontWeight="500">
              Dashboard
            </Text>
            <Spacer />
            <Button mr="1" bg="white" variant="outline" color="#3B8FC2">
              <Flex align={"center"}>
                <DownloadIcon mr="10px" />
                <TriangleDownIcon mr="10px" />
              </Flex>
            </Button>

            <Button bg={"#3B8FC2"} color="white">
              <Flex align={"center"}>
                <LinkIcon mr="10px" />
                Send
              </Flex>
            </Button>
          </Flex>
          <Flex align={"center"}>
            <Box
              style={{
                w: "auto",
                h: "auto",
                border: "1px solid lightgrey",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <Button
                style={{
                  width: "30px",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRight: "1px solid gray",
                  borderRadius: "0px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <i style={{}} class="bi-arrow-left"></i>
              </Button>
              <span> September 2022 </span>
              <Button
                style={{
                  width: "auto",
                  height: "97%",
                  marginLeft: "6px",
                  backgroundColor: "#ffffff",
                  borderLeft: "1px solid gray",
                  borderRadius: "0px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <i style={{}} class="bi-arrow-right"></i>
              </Button>
            </Box>
            <Button ml="5" mr="5" bg="white" variant="outline" color="gray">
              <Flex align={"center"}>
                <Text fontSize="l" fontWeight="light">
                  Teams
                </Text>
              </Flex>
            </Button>
            <Button ml="5" mr="5" bg="white" variant="outline" color="gray">
              <Flex align={"center"}>
                <Text fontSize="l" fontWeight="light">
                  Clinets
                </Text>
              </Flex>
            </Button>
            <Button ml="5" mr="5" bg="white" variant="outline" color="gray">
              <Flex align={"center"}>
                <Text fontSize="l" fontWeight="light">
                  Projects
                </Text>
              </Flex>
            </Button>
          </Flex>
          <Box
            borderTop="1px solid lightGray"
            borderBottom="1px solid lightGray"
            w="100%"
            h="100px"
            mt="1rem"
            display="flex"
          >
            <Box
              justifyContent="center"
              w="25%"
              h="100%"
              // border="1px solid red"
              display="flex"
              flexDirection="column"
              // mt="30%"
            >
              <Text color="#999999" m="0 auto">
                Total hours
              </Text>
              <Text color="#687481" fontSize="x-large" m="0 auto">
                {totalHours}
              </Text>
            </Box>
            <Box
              justifyContent="center"
              w="25%"
              h="100%"
              // border="1px solid red"
              display="flex"
              flexDirection="column"
              // mt="30%"
            >
              <Text color="#999999" m="0 auto">
                Billable Hours
              </Text>
              <Text color="#687481" fontSize="x-large" m="0 auto">
                {budSpent}(100%)
              </Text>
            </Box>
            <Box
              justifyContent="center"
              w="25%"
              h="100%"
              // border="1px solid red"
              display="flex"
              flexDirection="column"
              // mt="30%"
            >
              <Text color="#999999" m="0 auto">
                Billable Amount
              </Text>
              <Text color="#687481" fontSize="x-large" m="0 auto">
                ₹{amount}
              </Text>
            </Box>
            {/* <Box
              justifyContent="center"
              w="25%"
              h="100%"
              // border="1px solid red"
              display="flex"
              flexDirection="column"
              // mt="30%"
            >
              <Text color="#999999" m="0 auto">
                Average bill rate
              </Text>
              <Text color="#687481" fontSize="x-large" m="0 auto">
                ₹1.21k
              </Text>
            </Box> */}
          </Box>
          <Box w="100%" mt="1%" h="auto">
            <Box w="100%" h="auto">
              <TableContainer>
                <Table variant="simple" size={"md"}>
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead borderBottom={"3px solid lightGray"}>
                    <Tr>
                      <Th>PROJECT</Th>
                      <Th>TOTAL HOURS</Th>
                      <Th>BILLABLE AMOUNT</Th>
                      <Th>BUDGET SPENT</Th>
                      <Th>STATUS</Th>
                      <Th>REPORT</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {projects.map((item) => (
                      <Tr>
                        <Td>{item.projectname}</Td>
                        <Td>{item.hours}</Td>
                        <Td>{item.billingAmount}</Td>
                        <Td>{item.budgetSpent}</Td>

                        <Td>{item.status ? "Active" : "inActive"}</Td>
                        <Td>
                          <Flex justifyContent={"space-evenly"}>
                            <ExternalLinkIcon w="16px" />
                            Activity
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box w="90%" display="flex" h="50px">
            <Box
              // border="1px solid green"
              display="flex"
              ml="20%"
              mr="2%"
              w="17%"
              h="auto"
            >
              <Text margin="auto">{totalHours}</Text>
            </Box>
            <Box
              // border="1px solid green"
              display="flex"
              // mr="2%"
              // ml="2%"
              w="17%"
              h="auto"
            >
              <Text margin="auto">₹{amount}</Text>
            </Box>
            <Box
              // border="1px solid green"1
              w="17%"
              ml="5%"
              h="auto"
              display="flex"
            >
              <Text margin="auto">₹{budSpent}</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
