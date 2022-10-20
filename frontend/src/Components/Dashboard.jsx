import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";
import Track from "./Track";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const getUserName = (token) => {
  return axios.get(`https://myhoursclone.herokuapp.com/projects`, {
    headers: { token: token },
  });
};

export default function Dashboard() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    // console.log("in track page----->",token)
    getUserName(token)
      .then((res) => {
        // console.log("user name--->", res.data[0].companyID.name);
        setUserName(res.data[0].companyID.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar userName={userName} />
      <Track userName={userName} />
    </div>
  );
}
