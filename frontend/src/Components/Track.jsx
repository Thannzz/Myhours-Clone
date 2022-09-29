import React from 'react'
import "../styles/Dashboard.css"
import { Button, WrapItem } from "@chakra-ui/react";

export default function Track() {
  return (
    <div className="track">
      <h2 className="track-title">Weekly timesheet</h2>
      <section className="weeks-area">
        <div className='track-dates'>dates</div>

        <div className='track-user'>user</div>

      
          <Button style={{ backgroundColor: "#dceefa" }} >
            {" "}
            <i style={{ paddingRight: "10px" }} class="bi-stopwatch"></i> Timer
          </Button>
     
        <button></button>
      </section>
    </div>
  );
}
