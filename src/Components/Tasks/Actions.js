import axios from "axios";

export const getUserData = async (dispatch, token, page = 1, limit = 3) => {
  try {
    axios
      .get(`http://localhost:8080/usertasks?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) =>
        dispatch({ type: "loadUserData", payload: data.data.jobs })
      );
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = (el, dispatch, token) => {
  try {
    axios.delete(`http://localhost:8080/usertasks/${el._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = (id, change, dispatch, token) => {
  console.log(change);
  try {
    axios
      .patch(`http://localhost:8080/usertasks/${id}`, change, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getUserData(dispatch, token));
  } catch (err) {
    console.log(err);
  }
};

export const SortDataAPI = (dispatch, token, key, change) => {
  try {
    axios
      .get(`http://localhost:8080/usertasks?type=${key}&sort=${change}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data.jobs);
        dispatch({ type: "loadUserData", payload: data.data.jobs });
      });
  } catch (err) {
    console.log(err);
  }
};
