import React from "react";
import "../styles/Dashboard.css";
import { Box, Button, WrapItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import HoursForm from "./HoursForm";

export default function Track() {
  const [mon,setMon] = useState("0:00")
  const [tue, setTue] = useState("0:00");
  const [wed, setWed] = useState("0:00");
  const [thu, setThu] = useState("0:00");
  const [fri, setFri] = useState("0:00");
  const [totalBudget,setTotalBudget] = useState(null)
  const budgetDates = [
    "Mon, 26 Sep",
    "Tue, 27 Sep",
    "Wed, 28 Sep",
    "Thu, 29 Sep",
    "Fri, 30 Sep",
  ];
  const budgetDatesValues = [
  mon,
  tue,
  wed,
  thu,
  fri,
  ];

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
          <div style={{ width: "82%" }}></div>
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
      {/* <br style={{border:"1px solid gray"}} /> */}
      <Divider
        borderColor="gray"
        width="97%"
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
        width="97%"
        marginTop="15px"
        marginLeft="30px"
      />
      <Box w="97%" ml="30px" mt="5px">
        <HoursForm totalBudget={totalBudget} />
      </Box>
    </div>
  );
}
