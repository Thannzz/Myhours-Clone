import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
  let token = JSON.parse(localStorage.getItem("token"));

  const initialProject = {
    projectname: "",
    clientName: "",
    description: "",
    billing: true,
    hours: 0,
    billingAmount: 0,
    budgetSpent: 0,
    createdON: Date(),
    status: true,
    teamMembers: [],
  };
  const [project, setProject] = useState(initialProject);
  const [team, setteam] = useState(initialProject.teamMembers);
  // const [radio, setRadio] = useState("1");
  const navigate = useNavigate("/dashboard/project");

  const onChange = (e) => {
    let { name: key, value, type } = e.target;

    // console.log("type:", type, "value :", value, "name :", key);
    setteam(e.target.value.split(","));
    let val = key === "teamMembers" ? team : value;

    setProject({
      ...project,
      [key]: val,
    });
    // console.log(key, e.target.value);
  };

  // const setTeam = (e) => {};

  const submit = async () => {
    let res = await axios({
      method: "POST",
      headers: {
        token: token,
      },
      url: "https://myhoursclone.herokuapp.com/projects/new",
      data: project,
    });

    // console.log(res.data);
    navigate("/dashboard/projects");
  };

  return (
    <Box w="40%" m={"auto"} mb="100px">
      <Text mb="20px" fontSize="5xl">
        Add Projects
      </Text>
      <Stack gap={"20px"}>
        <Box>
          <FormLabel>Project Name</FormLabel>
          <Input
            name="projectname"
            placeholder="Project Name"
            onChange={onChange}
          />
        </Box>
        <Box>
          <FormLabel>Client</FormLabel>
          <Input name="clientName" placeholder="Client" onChange={onChange} />
        </Box>
        <Box>
          <FormLabel>Team members</FormLabel>
          <Input
            name="teamMembers"
            placeholder="add team members i.e.: One, Two, Three..."
            onChange={onChange}
          />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Description..."
            onChange={onChange}
          />
        </Box>

        <Box>
          <Text fontSize="3xl">Billable settings</Text>
          <RadioGroup
            name="billing"
            // onChange={onChange}
            //  value={radio}
          >
            <Stack gap={"20px"}>
              <Radio value="1">
                <Box ml="20px">
                  <Text fontSize="2xl">Team member-based rate</Text>
                  <Text>
                    Set billable rates per Team member in the next step.
                  </Text>
                </Box>
              </Radio>

              <Radio value="2">
                <Box ml="20px">
                  <Text fontSize="2xl">Task-based rate</Text>
                  <Text>
                    Set billable rates on the task-level. Each task can have a
                    different rate.
                  </Text>
                </Box>
              </Radio>

              <Radio value="3">
                <Box ml="20px">
                  <Text fontSize="2xl">Project-based rate</Text>
                  <Text>
                    All time logs in this project will have the same billable
                    rate.
                  </Text>
                </Box>
              </Radio>
              <Radio value="4">
                <Box ml="20px">
                  <Text fontSize="2xl">Not billable</Text>
                  <Text>Billable amount will not be calculated.</Text>
                </Box>
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Button w="15%" onClick={submit} colorScheme={"teal"}>
          Create Project
        </Button>
      </Stack>
    </Box>
  );
}

export default ProjectForm;
