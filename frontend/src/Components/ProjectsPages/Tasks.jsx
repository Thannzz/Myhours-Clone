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
// import { AppContext } from "../../context/Appcontext";
import axios from "axios";
import { useEffect } from "react";

const getProject = async (id) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let res = await axios({
    method: "GET",
    url: `https://myhoursclone.herokuapp.com/projects/${id}`,
    headers: {
      token: token,
    },
  });
  console.log("project:", res.data);
  return res.data;
};
const getTasks = async (id) => {
  let res = await axios.get("https://myhoursclone.herokuapp.com/tasks", {
    headers: {
      projectid: id,
    },
  });

  return res.data;
};

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
  const [project, setProject] = useState({});
  const [team, setteam] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getProject(projectId).then((res) => {
      setteam(res.teamMembers);
      setProject(res);
    });
  }, [projectId]);

  useEffect(() => {
    getTasks(projectId).then((res) => setTasks(res));
  }, [newTask, status]);

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
      url: "https://myhoursclone.herokuapp.com/tasks",
    });
    setStatus(!status);
    console.log(res.data);
  };

  const toggleTask = async (id, status) => {
    let res = await axios({
      method: "PATCH",
      headers: {
        projectid: projectId,
      },
      data: { status: !status },
      url: `https://myhoursclone.herokuapp.com/tasks/${id}`,
    });
    setStatus(!status);
    console.log(res);
  };

  return (
    <Flex>
      <Sidebar />
      <Box p="0 10%" w={"60%"}>
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
        <Stack gap="5px" w="100%">
          {tasks.map((task) =>
            task.status ? null : (
              <Flex key={task._id}>
                <IconButton
                  onClick={() => toggleTask(task._id, task.status)}
                  icon={<CheckCircleIcon />}
                />
                <Text ml="10px" fontSize={"xl"}>
                  Task: {task.task}
                </Text>
                <Spacer />
                <Text fontSize={"l"}>Budget: {task.budget} Hours</Text>
              </Flex>
            )
          )}
          <Box bgColor="#EDF2F7" width={"60%"}>
            <Text color={"blue"}>
              <SmallAddIcon /> Add new Task
            </Text>
            <Input
              border={"none"}
              borderBottom={"2px solid gray"}
              mb={"20px"}
              name="task"
              placeholder="Add your task..."
              onChange={onChange}
            />

            <Select
              border={"none"}
              mb="20px"
              borderBottom={"2px solid gray"}
              name="assignedTo"
              onChange={onChange}
              placeholder="Assigned to"
            >
              {team.map((member) => (
                <option key={member} value={member}>
                  {member}
                </option>
              ))}
            </Select>

            {project.billing ? (
              <Input
                border={"none"}
                borderBottom={"2px solid gray"}
                mb={"20px"}
                name="labourRate"
                placeholder="Billable Rate"
                onChange={onChange}
              />
            ) : null}
            {project.billing ? (
              <Input
                border={"none"}
                borderBottom={"2px solid gray"}
                mb={"20px"}
                name="budget"
                placeholder="Budget in Hours"
                onChange={onChange}
              />
            ) : null}
            <Input
              border={"none"}
              borderBottom={"2px solid gray"}
              mb={"20px"}
              name="description"
              placeholder="Description"
              onChange={onChange}
            />
            <Button bg="none" color={"green"} onClick={createTask}>
              Add This Task
            </Button>
          </Box>
          {tasks.map((task) =>
            task.status ? (
              <Flex key={task._id}>
                <IconButton
                  onClick={() => toggleTask(task._id, task.status)}
                  icon={<CheckCircleIcon color={"green"} />}
                />
                <Text ml="10px" fontSize={"xl"}>
                  Task: {task.task}
                </Text>
                <Spacer />
                <Text fontSize={"l"}>Budget: {task.budget} Hours</Text>
              </Flex>
            ) : null
          )}
        </Stack>
      </Box>
    </Flex>
  );
}

export default Tasks;
