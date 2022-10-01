import { Box, Divider, Input, Text } from '@chakra-ui/react';
import React from 'react'
import { Select } from "@chakra-ui/react";
import axios from "axios"
import { useState } from 'react';

const getProjectsName = (token) => {
  return axios.get(`http://localhost:8080/projects`, {
    headers: { token: token },
  });
};


export default function HoursForm({ totalBudget,handleHours }) {
  const [projectNames,setProjectNames] =  useState([]);
  let {handleHours1,handleHours2,handleHours3,handleHours4,handleHours5} = handleHours;


  let handleGetName = ()=>{

    getProjectsName("6333e691834c4636928012bf:thaa@gmail.com :qwerty")
    .then((res)=>{
      // console.log(res.data)
      setProjectNames(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })


  }

  return (
    <div>
      <Box mt={2} display="flex" fontFamily="sans-serif" width="99.50%">
        {/* <Input
          htmlSize={4}
          width="26%"
          h="35px"
          placeholder="Select/create a project..."
        /> */}

        <Select
          onClick={handleGetName}
          width="26%"
          h="35px"
          placeholder="Select/create a project..."
        >
          {projectNames&&projectNames.map((name) => (
            <option value={name.projectName}>{    name.projectname} - {name.projectname}</option>
          ))}
        </Select>

        <Input
          htmlSize={4}
          width="15%"
          ml="6px"
          h="35px"
          placeholder="Select/create a..."
        />
        <Input onChange={(e)=> handleHours1(e.target.value)} htmlSize={4} width="8%" ml="13px" h="35px" placeholder="hour" />

        <Input onChange={(e)=> handleHours2(e.target.value)} htmlSize={4} width="8%" ml="13px" h="35px" placeholder="hour" />
        <Input onChange={(e)=> handleHours3(e.target.value)} htmlSize={4} width="8%" ml="8px" h="35px" placeholder="hour" />
        <Input onChange={(e)=> handleHours4(e.target.value)} htmlSize={4} width="8%" ml="8px" h="35px" placeholder="hour" />
        <Input onChange={(e)=> handleHours5(e.target.value)} htmlSize={4} width="8%" ml="9px" h="35px" placeholder="hour" />
        <Text fontSize="md" ml="49px">
          {totalBudget || "00:00"}
        </Text>
      </Box>
      <Divider borderColor="gray" mt={2} width="99.50%" />
    </div>
  );
}
