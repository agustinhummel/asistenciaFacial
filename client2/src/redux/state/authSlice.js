import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";
import { deleteRequest, patchRequest, postRequest } from "../../services/httpRequest.js";

export const initialAuth = {
  token: "",
  user: {
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getLocalStorage("auth") ? getLocalStorage("auth") : initialAuth,

  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: () => {
      clearLocalStorage("auth");
      return initialAuth;
    },
  }
});

export const { setLogin, setLogout, } =
  authSlice.actions;

export default authSlice.reducer;

export const loginUser = dataLogin => async dispatch => {
  try {
    const auth = await postRequest(dataLogin, "/user/auth");
    if (auth.tokenJWT !== "") {
      dispatch(setLogin({ token: auth.tokenJWT, user: auth.userData }));
      const authInStorage = { token: auth.tokenJWT, user: auth.userData };
      setLocalStorage("auth", authInStorage);
      return { login: true, msg: auth.message, user: auth.userData };
    }
    return { login: false };
  } catch (error) {
    const msgError = error;
    return { login: false, msg: msgError.toString() };
  }
};


export const updateProfile = data => async dispatch => {
  try {
    const res = await patchRequest(data, "/user/editUser");
    if (res?.userPatch) {
      dispatch(setUpdateUser({ user: res.userPatch }));
      setLocalStorage("auth", {
        token: JSON.parse(localStorage.auth).token,
        user: res.userPatch
      });
      return { ok: true };
    }
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteProfile = id => async dispatch => {
  try {
    const res = await deleteRequest("/user/delete/" + id);

    if (res?.status === 200) {
      dispatch(setLogout());
      dispatch(setLogin({}));
    }
    return res?.status;
  } catch (error) {
    console.log(error);
    return false;
  }
};



