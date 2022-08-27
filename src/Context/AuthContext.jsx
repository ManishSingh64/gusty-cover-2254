import { Children, createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  token: "",
  isLoggedIn: false,
  isSignuped: false,
  data: [],
  name: "",
  sortName: true,
  sortDeadline: true,
  pageLimit: 3,
  currentPage: 1,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "signupSuccess": {
      return {
        ...state,
        isSignuped: true,
      };
    }

    case "loginSuccess": {
      return {
        ...state,
        token: payload.token,
        isLoggedIn: true,
        name: payload.user.name,
      };
    }

    case "loadUserData": {
      return {
        ...state,
        data: payload,
      };
    }
    case "changeSortState": {
      return { ...state, sortName: !state.sortName };
    }
    case "changeSortDeadline": {
      return { ...state, sortDeadline: !state.sortDeadline };
    }
    case "setPageLimit": {
      return { ...state, pageLimit: payload };
    }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
