import React from 'react'
import "../styles/Dashboard.css"
import { Button, WrapItem } from "@chakra-ui/react";

export default function Track() {
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
            <i style={{}} class="bi-arrow-left"></i>
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
            <i style={{}} class="bi-arrow-right"></i>
          </Button>
        </div>

        <div style={{ marginLeft: "2rem" }} className="track-user">
          <Button style={{ width: "30px", height: "100%" }}>
            {" "}
            <i style={{}} class="bi-arrow-left"></i>
          </Button>
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
    </div>
  );
}
