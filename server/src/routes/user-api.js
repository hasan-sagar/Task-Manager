const express = require("express");
const {
  Registration,
  Login,
  ProfileUpdate,
  ProfileDetails,
} = require("../controllers/UsersController");
const AuthenticationVerify = require("../middleware/AuthenticationVerify");
const router = express.Router();

//user registration
router.post("/registration", Registration);
//user login
router.post("/login", Login);
//profile update
router.post("/profileUpdate", AuthenticationVerify, ProfileUpdate);
//profile details
router.get("/profileDetails", AuthenticationVerify, ProfileDetails);

module.exports = router;
