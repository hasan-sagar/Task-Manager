import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../apiRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

function Login() {
  let emailRef,
    passwordRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();

    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Required");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else {
      LoginRequest(email, password).then((res) => {
        if (res === true) {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <div>
      <main className="mt-20">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-700 capitalize ">
            Login To Continue!
          </h2>
          <form onSubmit={onFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 ">Email Address</label>
                <input
                  defaultValue="khsagar0512@gmail.com"
                  ref={(input) => (emailRef = input)}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">Password</label>
                <input
                  defaultValue="sagar"
                  ref={(input) => (passwordRef = input)}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-teal-400
                  rounded-md  focus:border-teal-400 focus:ring-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <Link
                  to="/register"
                  className="mt-1 text-sm text-indigo-600 font-bold"
                  id="user_avatar_help"
                >
                  Not Registered Yet? Register Now.
                </Link>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-teal-400 rounded-md  focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
