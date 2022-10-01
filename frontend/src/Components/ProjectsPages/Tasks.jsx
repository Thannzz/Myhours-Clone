import React from 'react';
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
import { useState } from 'react';


function Tasks() {
    const [ projects, setProjects ] = useState({});
  return (
    <Box>
        <Text fontSize="5xl">Task</Text>
    </Box>
  )
}

export default Tasks