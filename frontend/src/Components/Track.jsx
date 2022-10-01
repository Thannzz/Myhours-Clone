import React from "react";
import "../styles/Dashboard.css";

import { Box, Button, Text } from "@chakra-ui/react";

import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import HoursForm from "./HoursForm";

export default function Track({ userName }) {

  const [mon, setMon] = useState("0:00");
  const [tue, setTue] = useState("0:00");
  const [wed, setWed] = useState("0:00");
  const [thu, setThu] = useState("0:00");
  const [fri, setFri] = useState("0:00");
  const [totalBudget, setTotalBudget] = useState(0);
  const [formArr, setformArr] = useState([1]);
  const budgetDates = [
    "Mon, day-1",
    "Tue, day-2",
    "Wed, day-3",
    "Thu, day-4",
    "Fri, day-5",
  ];
  const budgetDatesValues = [mon, tue, wed, thu, fri];

  let handleHours1 = (value) => {
    setMon(value);
    setTotalBudget((pre) => pre + +value);
  };

  let handleHours2 = (value) => {
    setTue(value);
    setTotalBudget((pre) => pre + +value);
  };
  let handleHours3 = (value) => {
    setWed(value);
    setTotalBudget((pre) => pre + +value);
  };
  let handleHours4 = (value) => {
    setThu(value);
    setTotalBudget((pre) => pre + +value);
  };
  let handleHours5 = (value) => {
    setFri(value);
    setTotalBudget((pre) => pre + +value);
  };

  let handleHours = {
    handleHours1,
    handleHours2,
    handleHours3,
    handleHours4,
    handleHours5,
  };

  const handleForm = () => {
    let temArr = formArr;
    temArr.push(temArr.length + 1);
    setformArr(temArr);
  };


  return (
    <div className="track">
      <h2 className="track-title">Weekly timesheet</h2>
      <section className="weeks-area">
        <div className="track-dates">
          <Button
            style={{
              width: "30px",
              height: "97%",
              backgroundColor: "#ffffff",
              borderRight: "1px solid gray",
              borderRadius: "0px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <i class="bi-arrow-left"></i>
          </Button>

          <i
            style={{
              fontSize: "20px",
              marginLeft: "10px",
            }}
            class="bi-calendar2-check"
          ></i>
          <span> This, week, 26 Sep - 2 Oct 2022 </span>
          <Button
            style={{
              width: "30px",
              height: "97%",
              marginLeft: "6px",
              backgroundColor: "#ffffff",
              borderLeft: "1px solid gray",
              borderRadius: "0px",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <i class="bi-arrow-right"></i>
          </Button>
        </div>

        <div className="track-user">
          <i
            style={{ fontSize: "23px", marginLeft: "5px" }}
            class="bi-person"
          ></i>
          <div style={{ width: "82%" }}>
            <span style={{ margin: "auto", marginLeft: "5%" }}>{userName}</span>
          </div>
          <i style={{ fontSize: "15px" }} class="bi-caret-right-fill"></i>
        </div>

        <Button style={{ backgroundColor: "#dceefa", marginLeft: "18rem" }}>
          {" "}
          <i style={{ paddingRight: "10px" }} class="bi-stopwatch"></i> Timer
        </Button>
        <Button style={{ backgroundColor: "#dceefa", marginLeft: "15px" }}>
          {" "}
          <i class="bi-gear"></i>
        </Button>
      </section>
      <Divider
        borderColor="gray"
        width="96.40%"
        marginTop="15px"
        marginLeft="30px"
      />
      <section className="client-projects">
        <div className="budget-title">
          <div className="budget-dates">
            {budgetDates.map((dates, ind) => (
              <span key={ind}>{dates}</span>
            ))}
          </div>
          <span style={{ fontSize: "20px" }}>Total Budget</span>
        </div>
        <div className="budget-values">
          <span style={{ fontSize: "20px" }}>Client & Project</span>
          <span style={{ fontSize: "20px", marginLeft: "10rem" }}>Task</span>
          <div className="budget-dates-values">
            {budgetDatesValues.map((dates, ind) => (
              <span key={ind}>{dates}</span>
            ))}
          </div>
          <span
            style={{ fontSize: "22px", marginLeft: "25px", fontWeight: "600" }}
          >
            {totalBudget || "00:00"}
          </span>
        </div>
      </section>
      <Divider
        borderColor="gray"
        width="96.40%"
        marginTop="15px"
        marginLeft="30px"
      />
      <Box w="97%" ml="30px" mt="5px">
        {formArr &&
          formArr.map((i, ind) => (
            <HoursForm
              key={ind}
              totalBudget={totalBudget}
              handleHours={handleHours}
              i={i}
            />
          ))}
      </Box>
      <Text
        onClick={handleForm}
        fontSize="md"
        display="flex"
        alignItems="center"
        color="skyblue"
        cursor="pointer"
        mt="5px"
        ml="2%"
      >
        {" "}
        <i
          style={{ fontSize: "25px", paddingRight: "10px" }}
          class="bi-plus"
        ></i>{" "}
        Add timesheet row
      </Text>
    </div>
  );
}
