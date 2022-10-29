import React, { useEffect, useRef } from "react";
import {
  GetProfileDetails,
  ProfileUpdateRequest,
} from "../../apiRequest/APIRequest";
import { useSelector } from "react-redux";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";
import propiC from "../../assets/images/undraw_profile_pic_re_tdyo.svg";

export default function Profile() {
  const navigate = useNavigate();
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  useEffect(() => {
    GetProfileDetails();
  }, []);

  const ProfileData = useSelector((state) => state.profile.value);

  const UpdateMyProfile = (e) => {
    e.preventDefault();
    let email = emailRef.value;
    let fastName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(fastName)) {
      ErrorToast("First Name Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      ProfileUpdateRequest(email, fastName, lastName, mobile, password).then(
        (result) => {
          if (result === true) {
            navigate("/");
          }
        }
      );
    }
  };

  return (
    <div>
      <section className="min-h-screen bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl">
                User Profile
              </h1>
              <p className="mt-4 text-gray-500 ">You Can Update Your Info</p>
              <form className="mt-12" onSubmit={UpdateMyProfile}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2 ml-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      FirstName
                    </label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["firstName"]}
                      ref={(input) => (firstNameRef = input)}
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Last Name
                    </label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["lastName"]}
                      ref={(input) => (lastNameRef = input)}
                      type="text"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="flex-1 px-2 mt-10 md:mt-5 ">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    key={Date.now()}
                    defaultValue={ProfileData["email"]}
                    readOnly={true}
                    ref={(input) => (emailRef = input)}
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-5">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Password
                  </label>
                  <input
                    key={Date.now()}
                    defaultValue={ProfileData["password"]}
                    ref={(input) => (passwordRef = input)}
                    type="password"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-5">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Phone Number
                  </label>
                  <input
                    key={Date.now()}
                    defaultValue={ProfileData["mobile"]}
                    ref={(input) => (mobileRef = input)}
                    type="text"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <button className="w-full px-6 py-3 mt-5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-md hover:bg-teal-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Update Profile
                </button>
              </form>
            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src={propiC}
                alt
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
