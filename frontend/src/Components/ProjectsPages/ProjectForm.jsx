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
import React from "react";

function ProjectForm() {
    const onChange = (e)=>{

    }
  return (
    <Box w="40%" m={"auto"} mb="100px">
      <Text mb="20px" fontSize="5xl">
        Add Projects
      </Text>
      <Stack gap={"20px"}>
        <Box>
          <FormLabel>Project Name</FormLabel>
          <Input name="projectname" placeholder="Project Name" />
        </Box>
        <Box>
          <FormLabel>Client</FormLabel>
          <Input name="clientName" placeholder="Client" />
        </Box>
        <Box>
          <FormLabel>Team members</FormLabel>
          <Input name="team" placeholder="add team members i.e.: One, Two, Three..." />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea name="discription" placeholder="Description..." />
        </Box>

        <Box>
          <Text fontSize="3xl">Billable settings</Text>
          <RadioGroup name="radio" defaultValue="1">
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
        <Button w="15%" colorScheme={"teal"}>Create Project</Button>
      </Stack>
    </Box>
  );
}

export default ProjectForm;
