import { Children, createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  token: "",
  isLoggedIn: false,
  isSignuped: false,
  data: [],
  name: "",
  sortName: true,
  sortNameSymbol: true,
  sortDeadline: true,
  sortDeadlineSymbol: true,
  pageLimit: 3,
  currentPage: 1,
  totalCount: 0,
  crm: false,
  tasks: false,
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
      localStorage.setItem("setLoggedIn", true);
      return {
        ...state,
        token: payload.token,
        isLoggedIn: true,
        name: payload.name,
      };
    }

    case "loadUserData": {
      return {
        ...state,
        data: payload.data,
        totalCount: payload.count,
      };
    }
    case "changeSortState": {
      return {
        ...state,
        sortName: !state.sortName,
        sortNameSymbol: !state.sortNameSymbol,
        sortDeadlineSymbol: true,
      };
    }
    case "changeSortDeadline": {
      return {
        ...state,
        sortDeadline: !state.sortDeadline,
        sortDeadlineSymbol: !state.sortDeadlineSymbol,
        sortNameSymbol: true,
      };
    }
    case "setPageLimit": {
      return { ...state, pageLimit: payload };
    }
    case "setCurrentPage": {
      return { ...state, currentPage: payload };
    }
    case "setCrm": {
      return { ...state, crm: true, tasks: false };
    }
    case "setTasks": {
      return { ...state, tasks: true, crm: false };
    }
    case "setLogout": {
      localStorage.setItem("setLoggedIn", false);
      return { ...state, isLoggedIn: false };
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
