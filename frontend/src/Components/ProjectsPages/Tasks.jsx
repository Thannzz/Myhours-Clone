import React, { useContext } from "react";
import { SmallAddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Stack,
  Spacer,
  Text,
  Input,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { AppContext } from "../../context/Appcontext";
import axios from "axios";
import { useEffect } from "react";

const getTasks = async (id) => {
  let res = await axios.get("http://localhost:8080/tasks", {
    headers: {
      projectid: id,
    },
  });
  console.log(res.data);
  return res.data;
};

function Tasks() {
  const { project } = useContext(AppContext);
  const initialTask = {
    task: "",
    assignedTo: "",
    description: "",
    projectid: project._id,
    labourRate: 0,
    budget: 0,
  };
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(project._id).then((res) => setTasks(res));
  }, [newTask]);

  console.log(project);
  const onChange = (e) => {
    const { name: key, value } = e.target;
    setNewTask({
      ...newTask,
      [key]: value,
    });
  };
  const createTask = async () => {
    let res = await axios({
      method: "POST",
      data: newTask,
      headers: {
        projectid: project._id,
      },
      url: "http://localhost:8080/tasks",
    });
    console.log(res.data);
  };
  return (
    <Flex>
      <Sidebar />
      <Box p="0 10%">
        <Flex mb={"50px"} alignItems={"baseline"} gap="20px">
            <Text fontWeight={"500"} fontSize={"4xl"}>
              {project.projectname}
            </Text>
            <Text fontSize={"xl"} color="gray">
              {project.clientName}
            </Text>
        </Flex>
        <Text fontSize={"3xl"} fontWeight="500">
          Task List
        </Text>
        <Divider m="10px 0px" />
        <Stack gap="5px" w={"40%"}>
          {tasks.map((task) => (
            <Flex key={task._id}>
              <IconButton  icon={<CheckCircleIcon />} />
              <Text ml="10px" fontSize={"xl"}>Task: {task.task}</Text>
              <Spacer />
              <Text fontSize={"l"}>Budget: {task.budget} Hours</Text>
            </Flex>
          ))}
          <box bgColor="#EDF2F7">
            <Text color={"blue"}>
              <SmallAddIcon /> Add new Task
            </Text>
            <Input
              mb={"10px"}
              name="task"
              placeholder="Add your task..."
              onChange={onChange}
            />
            <Input
              mb={"10px"}
              name="assignedTo"
              placeholder="Assigned to"
              onChange={onChange}
            />
            {project.billing ? 
              <Input
                mb={"10px"}
                name="labourRate"
                placeholder="Billable Rate"
                onChange={onChange}
              />
             : null}
            {project.billing ? 
              <Input
                mb={"10px"}
                name="budget"
                placeholder="Budget in Hours"
                onChange={onChange}
              />
             : null}
            <Input
              mb={"10px"}
              name="description"
              placeholder="Description"
              onChange={onChange}
            />
            <Button border={"1px solid"} bg="none" onClick={createTask}>
              Add This Task
            </Button>
          </box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Tasks;
