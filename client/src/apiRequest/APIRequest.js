import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { SetProfile } from "../redux/state-slice/profile-slice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import { SetStatistics } from "../redux/state-slice/statistics-slice";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../redux/state-slice/task-slice";
import store from "../redux/store/store";

const BaseUrl = "http://localhost:5000/api/v1";
const HeaderToken = { headers: { token: getToken() } };

//user registration
export function RegistrationRequest(
  firstName,
  lastName,
  email,
  password,
  mobile
) {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/users/registration";
  let BodyData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    mobile: mobile,
  };

  return axios
    .post(url, BodyData)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast("Email Already Exist! Please Login");
            return false;
          } else {
            ErrorToast("Something Went Wrong. Try Again");
            return false;
          }
        } else {
          SuccessToast("Registration Complete.Please Login Now");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong.Try Again");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong.Try Again");
      return false;
    });
}

//user login
export function LoginRequest(email, password) {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/users/login";
  let BodyData = { email: email, password: password };

  return axios
    .post(url, BodyData)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Sucessfully! Enjoy");
        return true;
      } else {
        ErrorToast("Invalid Email or Password.Please Try Again");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    });
}

//task create
export function CreateTaskRequest(title, description) {
  store.dispatch(ShowLoader());

  let url = BaseUrl + "/tasks/createTask";
  let BodyData = { title: title, description: description, status: "New" };
  return axios
    .post(url, BodyData, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("New Task Added");
        return true;
      } else {
        ErrorToast("Something Went Wrong Try Again");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong Try Again");
      store.dispatch(HideLoader());
      return false;
    });
}

export function TaskListByStatus(status) {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/tasks/listTaskByStatus/" + status;

  axios.get(url, HeaderToken).then((res) => {
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (status === "New") {
        store.dispatch(SetNewTask(res.data["data"]));
      } else if (status === "Completed") {
        store.dispatch(SetCompletedTask(res.data["data"]));
      } else if (status === "Progress") {
        store.dispatch(SetProgressTask(res.data["data"]));
      } else if (status === "Canceled") {
        store.dispatch(SetCanceledTask(res.data["data"]));
      }
    } else {
      ErrorToast("Something Went Wrong");
    }
  });
}

export function DeleteTaskRequest(id) {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/tasks/deleteTask/" + id;

  return axios
    .get(url, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Deleted Task Success");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

export function DashboardStat() {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/tasks/taskStatusByCount";

  axios
    .get(url, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetStatistics(res.data["data"]));
      } else {
        ErrorToast("Something Went Wrong . Reload Page");
      }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong . Reload Page");
      store.dispatch(HideLoader());
    });
}

export function UpdateStatusRequest(id, status) {
  store.dispatch(ShowLoader());
  let url = BaseUrl + "/tasks/updateTaskStatus/" + id + "/" + status;
  return axios
    .get(url, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Status Updated");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

export function GetProfileDetails() {
  store.dispatch(ShowLoader());
  let URL = BaseUrl + "/users/profileDetails";
  axios
    .get(URL, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetProfile(res.data["data"][0]));
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
    });
}

export function ProfileUpdateRequest(
  email,
  firstName,
  lastName,
  mobile,
  password
) {
  store.dispatch(ShowLoader());

  let URL = BaseUrl + "/users/profileUpdate";

  let PostBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
  };
  let UserDetails = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
  };

  return axios
    .post(URL, PostBody, HeaderToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Profile Update Success");
        setUserDetails(UserDetails);
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
