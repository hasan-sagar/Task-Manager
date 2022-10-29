const jwt = require("jsonwebtoken");
const UsersModel = require("../models/UsersModel");

//registration
const Registration = async (req, res) => {
  let bodyData = req.body;
  await UsersModel.create(bodyData, (error, data) => {
    if (error) {
      res.status(400).json({ status: "fail", data: error });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//login
const Login = (req, res) => {
  let bodyData = req.body;
  UsersModel.aggregate(
    [
      { $match: bodyData },
      {
        $project: {
          _id: 0,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
        },
      },
    ],
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "fail", data: err });
      } else {
        if (data.length > 0) {
          let Payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0]["email"],
          };
          let token = jwt.sign(Payload, process.env.JWT_SECRET_KEY);
          res
            .status(200)
            .json({ status: "success", token: token, data: data[0] });
        } else {
          res.status(401).json({ status: "unauthorized" });
        }
      }
    }
  );
};

//update profile
const ProfileUpdate = (req, res) => {
  let email = req.headers["email"];
  let bodyData = req.body;
  UsersModel.updateOne({ email: email }, bodyData, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//profile details
const ProfileDetails = (req, res) => {
  let email = req.headers["email"];
  UsersModel.aggregate(
    [
      { $match: { email: email } },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
          password: 1,
        },
      },
    ],
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "fail", data: err });
      } else {
        res.status(200).json({ status: "success", data: data });
      }
    }
  );
};
module.exports = { Registration, Login, ProfileUpdate, ProfileDetails };
