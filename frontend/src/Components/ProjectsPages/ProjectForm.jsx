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

function ProjectForm() {
  const initialProject = {
    projectname: "",
    clientName: "",
    description: '',
    billing: false,
    hours: 0,
    billingAmount:0,
    budgetSpent: 0,
    createdON: "",
    status: true,
    teamMembers: [],
  }
  const [project, setProject] = useState(initialProject);
  const [ team, setteam] = useState("");
    const onChange = (e)=>{
      const { name:key, value } = e.target;
      setProject({
        ...initialProject,
        [key]:value,
      })
    };
    const setTeam = (e)=>{
      setteam(e.target.value);
    };
    const setBilling = (e)=>{
      setProject({
        ...initialProject,
        billing: e.target.value === "2"? true : false,
      })
    };

    const submit = ()=>{
      setProject({
        ...initialProject,
        teamMembers: team.split(", ")
      })
      let res = axios.post("http://localhost:8080/projects/new",{ body: project, headers :{
        token: "6333e76d834c4636928012c6:singla@gmail.com :23104"
      }});
      console.log(res.data);
    }

  return (
    <Box w="40%" m={"auto"} mb="100px">
      <Text mb="20px" fontSize="5xl">
        Add Projects
      </Text>
      <Stack gap={"20px"}>
        <Box>
          <FormLabel>Project Name</FormLabel>
          <Input name="projectname" placeholder="Project Name" onChange={onChange} />
        </Box>
        <Box>
          <FormLabel>Client</FormLabel>
          <Input name="clientName" placeholder="Client" onChange={onChange} />
        </Box>
        <Box>
          <FormLabel>Team members</FormLabel>
          <Input placeholder="add team members i.e.: One, Two, Three..." onChange={setTeam} />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea name="discription" placeholder="Description..." onChange={onChange} />
        </Box>

        <Box>
          <Text fontSize="3xl">Billable settings</Text>
          <RadioGroup onChange={setBilling} defaultValue="1">
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
        <Button w="15%" onClick={submit} colorScheme={"teal"}>Create Project</Button>
      </Stack>
    </Box>
  );
}

export default ProjectForm;
