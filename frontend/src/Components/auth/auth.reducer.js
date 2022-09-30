import { AUTH_POSTDATA, AUTH_SUCCESS } from "./auth.type";

let initialState = {
  token: "",
  isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    }
   

    default: {
      return state;
    }
  }
};
