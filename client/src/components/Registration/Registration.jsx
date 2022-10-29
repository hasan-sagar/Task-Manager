import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../../apiRequest/APIRequest";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";

function Registration() {
  //navigation route
  const navigate = useNavigate();
  //form data using useref
  let firstNamRef,
    lastNameRef,
    emailRef,
    passwordRef,
    mobileRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    let firstName = firstNamRef.value;
    let lastName = lastNameRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;
    let mobile = mobileRef.value;

    if (IsEmpty(firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required");
    } else if (IsEmail(email)) {
      ErrorToast("Enter Valid Email");
    } else if (IsMobile(mobile)) {
      ErrorToast("Enter Valid Mobile Number");
    } else if (IsEmpty(password)) {
      ErrorToast("Rquired A Password");
    } else {
      RegistrationRequest(firstName, lastName, email, password, mobile).then(
        (res) => {
          if (res === true) {
            navigate("/login");
          }
        }
      );
    }

    console.log(firstName + lastName + email + password + mobile);
  };

  return (
    <div>
      <main className="mt-20 h-screen">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-700 capitalize ">
            Registration Now!
          </h2>
          <form onSubmit={onFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 ">First Name</label>
                <input
                  ref={(input) => (firstNamRef = input)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 ">Last Name</label>
                <input
                  ref={(input) => (lastNameRef = input)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 ">Email Address</label>
                <input
                  ref={(input) => (emailRef = input)}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 ">Phone Number</label>
                <input
                  ref={(input) => (mobileRef = input)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">Password</label>
                <input
                  ref={(input) => (passwordRef = input)}
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
              <Link
                to="/login"
                className="mt-1 text-sm text-indigo-600 font-bold"
                id="user_avatar_help"
              >
                Already An User Yet? Login Now.
              </Link>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-teal-400 rounded-md  focus:outline-none focus:bg-gray-600">
                Register
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Registration;
