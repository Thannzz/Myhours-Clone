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
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { AppContext } from "../../context/Appcontext";
import axios from "axios";
import { useEffect } from "react";

const getProject = async (id) => {
  let token = localStorage.getItem("token")
  let res = await axios.get(`http://localhost:8080/projects/${id}`, {
    headers: {
      token: token,
    },
  });
  console.log(res.data);
  return res.data;
};
const getTasks = async(id) => {
  let res = await axios.get("http://localhost:8080/tasks",{
    headers: {
      projectid: id
    }
  });
  return res.data;
}

function Tasks() {
  const projectId = localStorage.getItem("projectId");
  const initialTask = {
    task: "",
    assignedTo: "",
    description: "",
    projectid: projectId,
    labourRate: 0,
    budget: 0,
  };
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);
  const [ project, setProject ] = useState({});

  useEffect(() => {
    getProject(projectId).then((res) => setProject(res));
  }, [projectId]);
  useEffect(()=>{
    getTasks(projectId).then(res => setTasks(res))
  }, [newTask]);

  console.log(projectId);
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
        projectid: projectId,
      },
      url: "http://localhost:8080/tasks",
    });
    console.log(res.data);
  };
  const toggleTask = async(id, status)=>{
    let res = await axios({
      method : "PATCH",
      headers: {
        projectid: projectId,
      },
      data: { status: !status},
      url: `http://localhost:8080/tasks/${id}`
    })
    console.log(res);
  }
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
        <Stack gap="5px">
          {tasks.map((task) => (
            task.status? null : 
            <Flex key={task._id} w="100%">
              <IconButton onClick={()=>toggleTask(task._id, task.status)} icon={<CheckCircleIcon />} />
              <Text ml="10px" fontSize={"xl"}>Task: {task.task}</Text>
              <Spacer />
              <Text fontSize={"l"}>Budget: {task.budget} Hours</Text>
            </Flex>
          ))}
          <Box bgColor="#EDF2F7" border={"1px solid"} width={"60%"}>
            <Text color={"blue"}>
              <SmallAddIcon /> Add new Task
            </Text>
            <Input
              mb={"10px"}
              name="task"
              placeholder="Add your task..."
              onChange={onChange}
            />
            <Select name="assignedTo" onChange={onChange} placeholder="Assigned to">
              {/* {project.teamMembers.map(member => (
                <option value={member}>{member}</option>
              ))} */}
            </Select>
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
          </Box>
          {tasks.map((task) => (
            task.status? 
            <Flex key={task._id}>
              <IconButton onClick={()=>toggleTask(task._id, task.status)} icon={<CheckCircleIcon color={"green"} />} />
              <Text ml="10px" fontSize={"xl"}>Task: {task.task}</Text>
              <Spacer />
              <Text fontSize={"l"}>Budget: {task.budget} Hours</Text>
            </Flex>
            : null
          ))}
        </Stack>
      </Box>
    </Flex>
  );
}

export default Tasks;
