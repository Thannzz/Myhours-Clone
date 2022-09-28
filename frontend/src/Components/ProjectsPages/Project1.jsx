import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Input,
  Select,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { AddIcon, DownloadIcon, HamburgerIcon, CopyIcon } from "@chakra-ui/icons";
import inbox from "./Assets/inbox.png";
import pen from "./Assets/pen.png";
import box from "./Assets/cardboard-box.png"

export default function Projects() {

  

  let projects = [
    {
      name: "test1",
      client: "testClient1",
      hours: 12,
      Bamount: 450,
      bSpent: 60,
      created: "28-09-2022",
      status: "Active",
    },
    {
      name: "test2",
      client: "testClient2",
      hours: 12,
      Bamount: 450,
      bSpent: 60,
      created: "28-09-2022",
      status: "Active",
    },
    {
      name: "test3",
      client: "testClient3",
      hours: 12,
      Bamount: 450,
      bSpent: 60,
      created: "28-09-2022",
      status: "Active",
    },
    {
      name: "test4",
      client: "testClient4",
      hours: 12,
      Bamount: 450,
      bSpent: 60,
      created: "28-09-2022",
      status: "Active",
    },
  ];

  return (
    <Box m={"30px"}>
      <Flex mb={"30px"}>
        <Text fontSize="4xl" fontWeight="500">
          Projects
        </Text>
        <Spacer />
        <Button bg={"#3B8FC2"} color="white">
          <Flex align={"center"}>
            <AddIcon mr="10px" />
            Add New Projects
          </Flex>
        </Button>
      </Flex>
      <Flex align={"center"}>
        <Input w="15%" placeholder="Search by Projects or Client name" />
        <Button ml={"20px"} border="1px solid lightGray" bg="transparent">
          <Image src={inbox} w="20px" />
          <Select border={"none"}>
            <option value="all">All</option>
            <option value="archived">Archived</option>
            <option value="active">Active</option>
          </Select>
        </Button>
        <Spacer />
        <Box mr={"20px"} color={"blue"}>
          <DownloadIcon />
          Export
        </Box>
        <Flex align={"center"} color={"blue"}>
          <HamburgerIcon />
          Group by:
          <Select w={"20%"} border="none">
            <option value="none">None</option>
            <option value="client">Client</option>
          </Select>
        </Flex>
      </Flex>
      <TableContainer>
        <Table variant="simple" size={"md"}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead borderBottom={"1px solid lightGray"}>
            <Tr>
              <Th>NAME</Th>
              <Th>CLIENT</Th>
              <Th>TOTAL HOURS</Th>
              <Th>BILLABLE AMOUNT</Th>
              <Th>BUDGET SPENT</Th>
              <Th>CREATED</Th>
              <Th>STATUS</Th>
              <Th>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.client}</Td>
                <Td>{item.hours}</Td>
                <Td>{item.Bamount}</Td>
                <Td>{item.bSpent}</Td>
                <Td>{item.created}</Td>
                <Td>{item.status}</Td>
                <Td>
                  <Flex justifyContent={"space-evenly"}>
                    <Image src={pen} w="16px"/>
                    <CopyIcon w="16px"/>
                    <Image src={box} />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
