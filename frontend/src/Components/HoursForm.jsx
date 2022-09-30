import { Box, Divider, Input, Text } from '@chakra-ui/react';
import React from 'react'
import { Select } from "@chakra-ui/react";
import axios from "axios"

const getProjectsName = (token) => {
  return axios.get(`http://localhost:8080/projects`, {
    headers: { token: token },
  });
};


export default function HoursForm({ totalBudget }) {

  return (
    <div>
      <Box mt={2} display="flex" fontFamily="sans-serif" width="99.50%">
        {/* <Input
          htmlSize={4}
          width="26%"
          h="35px"
          placeholder="Select/create a project..."
        /> */}

        <Select width="26%" h="35px" placeholder="Select/create a project...">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Input
          htmlSize={4}
          width="15%"
          ml="6px"
          h="35px"
          placeholder="Select/create a..."
        />
        <Input htmlSize={4} width="8%" ml="13px" h="35px" placeholder="hour" />

        <Input htmlSize={4} width="8%" ml="13px" h="35px" placeholder="hour" />
        <Input htmlSize={4} width="8%" ml="8px" h="35px" placeholder="hour" />
        <Input htmlSize={4} width="8%" ml="8px" h="35px" placeholder="hour" />
        <Input htmlSize={4} width="8%" ml="9px" h="35px" placeholder="hour" />
        <Text fontSize="md" ml="49px">
          {totalBudget || "00:00"}
        </Text>
      </Box>
      <Divider borderColor="gray" mt={2} width="99.50%" />
    </div>
  );
}
