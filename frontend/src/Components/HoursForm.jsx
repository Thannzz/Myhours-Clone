import { Box, Divider, Input} from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
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

const updateHours = async (id, hours, token) => {
  let res = await axios({
    method: "PATCH",
    url: `http://localhost:8080/projects/${id}`,
    headers: { token: token },
    data: { hours: hours  },
  });
  return res;
};



export default function HoursForm({ totalBudget, handleHours, i }) {
  const [projectNames, setProjectNames] = useState([]);
  const [taskNames, setTaskNames] = useState([]);
  const [token, setToken] = useState(null);

  const [selectProjectInd, setSelectProjectInd] = useState(null);
  const [projectid, setProjectid] = useState(null);
  let { handleHours1, handleHours2, handleHours3, handleHours4, handleHours5 } =
    handleHours;
  let [alert, setAlert] = useState(false);
  let [isError, setIsError] = useState(false);
  let [billAmt,setBillAmt] = useState(0)

  let handleGetName = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    setToken(token);

    getProjectsName(token)
      .then((res) => {
        console.log(res.data);
        setProjectNames(res.data);
        // setBillAmt()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTaskName = () => {

    let oneItem = projectNames.find((elem, ind) => ind == selectProjectInd);

    let projectid = oneItem._id;
    
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
    updateHours(projectid, totalBudget, token)
      .then((res) => {

        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });
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
          width="8%"
          ml="13px"
          h="35px"
          placeholder="hh"
        />

        <Input
          onChange={(e) => handleHours2(e.target.value)}
          width="8%"
          ml="13px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours3(e.target.value)}
          width="8%"
          ml="8px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours4(e.target.value)}
          width="8%"
          ml="8px"
          h="35px"
          placeholder="hh"
        />
        <Input
          onChange={(e) => handleHours5(e.target.value)}
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
      {isError ? (
        <Alert status="error">
          <AlertIcon />
          Timesheet Not Updated
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
}
