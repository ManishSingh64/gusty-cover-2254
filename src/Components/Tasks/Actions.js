import axios from "axios";

export const getUserData = async (dispatch, token) => {
  try {
    axios
      .get("http://localhost:8080/usertasks", {
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
    axios
      .delete(`http://localhost:8080/usertasks/${el._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getUserData(dispatch, token));
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = (el, dispatch, token) => {
  console.log(el.status);
  try {
    axios
      .patch(
        `http://localhost:8080/usertasks/${el._id}`,
        { status: !el.status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => getUserData(dispatch, token));
  } catch (err) {
    console.log(err);
  }
};
