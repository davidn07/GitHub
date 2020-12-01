import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { createDispatchHook } from "react-redux";

const initialState = {
  users: [],
  contributors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GETUSERS":
      return {
        users: action.payload,
      };
    case "GETCONTRIBUTORS":
      return {
        contributors: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

const fetchUsers = (users) => {
  console.log(users);
  return {
    type: "GETUSERS",
    payload: users,
  };
};

const fetchContributors = (contributors) => {
  console.log(contributors);
  return {
    type: "GETCONTRIBUTORS",
    payload: contributors,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios.get("https://api.github.com/repositories").then((res) => {
      const users = res.data;
      dispatch(fetchUsers(users));
    });
  };
};

export const getContributors = (url) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      const contributors = res.data;
      dispatch(fetchContributors(contributors));
    });
  };
};
