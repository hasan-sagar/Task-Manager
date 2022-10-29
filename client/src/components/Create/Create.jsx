import React, { useRef } from "react";
import { CreateTaskRequest } from "../../apiRequest/APIRequest";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  let titleRef,
    descriptionRef = useRef();

  const onDataSubmit = () => {
    let title = titleRef.value;
    let description = descriptionRef.value;

    if (IsEmpty(title)) {
      ErrorToast("Title Required");
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required");
    } else {
      CreateTaskRequest(title, description).then((res) => {
        if (res === true) {
          navigate("/new");
        }
      });
    }
  };

  return (
    <div>
      <section className="flex justify-center">
        <div className="container px-5 py-24">
          <div className="lg:w-3/5 md:w-1/2 bg-white rounded-lg p-8  md:m-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
            <h2 className=" text-3xl mb-1 font-medium title-font text-teal-400">
              Create Task
            </h2>
            <p className="leading-relaxed mb-5 mt-5 text-gray-700">
              Create Title And Description
            </p>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">
                Task Title
              </label>
              <input
                ref={(input) => (titleRef = input)}
                type="text"
                name="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">
                Task Description
              </label>
              <textarea
                ref={(input) => (descriptionRef = input)}
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-white bg-teal-400  py-2 px-6  rounded text-lg"
              onClick={onDataSubmit}
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Create;
