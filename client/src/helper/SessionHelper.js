class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setUserDetails(UserDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  sessionRemove() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  sessionRemove,
  getUserDetails,
} = new SessionHelper();
