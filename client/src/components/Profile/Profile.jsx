import React from "react";

export default function Profile() {
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
              <form className="mt-12">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2 ml-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      FirstName
                    </label>
                    <input
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
                      type="email"
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
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-5">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Phone Number
                  </label>
                  <input
                    type="email"
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
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
