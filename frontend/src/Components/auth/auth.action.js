import { AUTH_POSTDATA, AUTH_SUCCESS } from "./auth.type";
import axios from "axios";

export const Logins = (data) => async (dispatch) => {
  console.log("action:", data);

  try {
    let response = await axios.post(
      "https://myhoursclone.herokuapp.com/company/signin",
      data
    );

    // console.log(response);
    dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
  } catch (err) {
    console.log(err);
  }
};

export const SignUp = (data) => async (dispatch) => {
  // console.log(data);
  try {
    let response = await axios.post(
      "https://myhoursclone.herokuapp.com/company/signup",
      data
    );

    console.log(response);
    // dispatch({ type: AUTH_POSTDATA, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
