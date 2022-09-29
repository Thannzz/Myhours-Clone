import { AUTH_SUCCESS } from "./auth.type";
import axios from "axios";

export const Logins = (data) => async (dispatch) => {
  console.log(data);
  try {
    let response = await axios.post("https://reqres.in/api/login", data);

    console.log(response);
    dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
  } catch (err) {
    console.log(err);
  }
};
