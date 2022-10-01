import { Box, Divider, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Button} from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const getProjectsName = (token) => {
  return axios.get(`http://localhost:8080/projects`, {
    headers: { token: token },
  });
};

const getTaskName = (projectid) => {
  return axios.get(`http://localhost:8080/tasks`, {
    headers: { projectid: projectid },
  });
};

const updateHours = async (id, hours) => {
  let response = await fetch(`http://localhost:8080/projects/${id}`, {
    method: "PATCH",

    body: JSON.stringify({ hours: hours }),

    headers: { "Content-Type": "application/json" },
  });
  return response;
};

export default function HoursForm({ totalBudget, handleHours, i }) {
  const [projectNames, setProjectNames] = useState([]);
  const [taskNames, setTaskNames] = useState([]);

  const [selectProjectInd, setSelectProjectInd] = useState(null);
  const [projectid, setProjectid] = useState(null);
  let { handleHours1, handleHours2, handleHours3, handleHours4, handleHours5 } =
    handleHours;
  let [alert, setAlert] = useState(false);

  let handleGetName = () => {
    let token = JSON.parse(localStorage.getItem("token"));

    getProjectsName("6333e691834c4636928012bf:thaa@gmail.com :qwerty")
      .then((res) => {
        console.log(res.data);
        setProjectNames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTaskName = () => {
    console.log("handle Task--->", selectProjectInd);

    let oneItem = projectNames.find((elem, ind) => ind == selectProjectInd);

    // console.log( "oneItem--->", oneItem)
    let projectid = oneItem._id;
    // console.log(projectid)
    setProjectid(projectid);

    getTaskName(projectid)
      .then((res) => {
        // console.log("res--->", res.data);
        setTaskNames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateHours = () => {
    // console.log("working handleUpdateHours", projectid);
    // console.log("total hours--->", totalBudget);
    // updateHours(projectid,totalBudget)
    // .then((res)=>{console.log(res)})
    // .catch((err)=>{console.log(err)})
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    // try{
    //    updateHours(projectid,totalBudget)

    // }
    // catch(err){console.log(err)}
  };

  return (
    <div>
      <Box mt={2} display="flex" fontFamily="sans-serif" width="99.50%">
        <Select
          onClick={handleGetName}
          onChange={(e) => setSelectProjectInd(e.target.value)}
          width="26%"
          h="35px"
          fontFamily="mono"
          placeholder="Select/create a project..."
        >
          {projectNames &&
            projectNames.map((name, ind) => (
              <option value={ind}>
                {name.projectname} - {name.projectname}
              </option>
            ))}
        </Select>

        <Select
          htmlSize={4}
          width="15%"
          ml="6px"
          h="35px"
          fontFamily="mono"
          placeholder="Select/create a..."
          onClick={handleTaskName}
        >
          {taskNames &&
            taskNames.map((task) => (
              <option value="option1"> {task.task}</option>
            ))}
        </Select>

        <Input
          onChange={(e) => handleHours1(e.target.value)}
          htmlSize={4}
          width="8%"
          ml="13px"
          h="35px"
          placeholder="hh"
        />

        <Input
          onChange={(e) => handleHours2(e.target.value)}
          htmlSize={4}
          width="8%"
          ml="13px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours3(e.target.value)}
          htmlSize={4}
          width="8%"
          ml="8px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours4(e.target.value)}
          htmlSize={4}
          width="8%"
          ml="8px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours5(e.target.value)}
          htmlSize={4}
          width="8%"
          ml="9px"
          h="35px"
          placeholder="hh"
        />

        <Button
          onClick={handleUpdateHours}
          ml="49px"
          colorScheme="teal"
          size="md"
        >
          Update
        </Button>

        {/* <Text fontSize="md" ml="49px">
          {totalBudget || "00:00"}
        </Text> */}
      </Box>
      <Divider borderColor="gray" mt={2} width="99.50%" />
      {alert ? (
        <Alert status="success">
          <AlertIcon />
          Timesheet Updated
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
}
