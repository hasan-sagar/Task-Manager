import { React, useState } from "react";
import proImage from "../../assets/images/undraw_profile_pic_re_tdyo.svg";
import { Link } from "react-router-dom";
import { sessionRemove, getUserDetails } from "../../helper/SessionHelper";

function MainLayout() {
  const [open, setOpen] = useState(false);
  const openButton = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    sessionRemove();
  };

  let firstName = getUserDetails()["firstName"];

  let lastName = getUserDetails()["lastName"];

  return (
    <div>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl" style={{ color: "#36d7b7" }}>
              Task Managment
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/create" className="mr-5 hover:text-gray-900">
              Create Task
            </Link>
            <Link to="/new" className="mr-5 hover:text-gray-900">
              New Task
            </Link>
            <Link to="/completed" className="mr-5 hover:text-gray-900">
              Completed Task
            </Link>
            <Link to="/progress" className="mr-5 hover:text-gray-900">
              Task Progress
            </Link>
            <Link to="/canceled" className="mr-5 hover:text-gray-900">
              Removed Task
            </Link>
          </nav>
          <button
            className="inline-flex items-center bg-gray-100 border-0 focus:outline-none  rounded text-base mt-4 md:mt-0"
            onClick={openButton}
          >
            <img
              src={proImage}
              alt=""
              style={{ width: "auto", height: "35px", borderRadius: "50%" }}
            />
          </button>
        </div>
        {open && (
          <div className="float-right h-auto d-flex z-50 rounded">
            <div className="user-dropdown shadow-lg pt-5 px-4 pb-5">
              <div className="user-dropdown-content mt-0">
                <div className="user-name user-email">
                  <h6 className="text-xl">{`${firstName + " " + lastName}`}</h6>
                  <h6 className="text-sm font-medium text-gray-500  dark:text-gray-400">
                    {getUserDetails()["email"]}
                  </h6>
                  <hr />
                  <div className="mt-4">
                    <Link to="/profile" className="mb-3">
                      Profile
                    </Link>
                    <h6 className="text-red-400 cursor-pointer">
                      <a onClick={onLogout}>Logout</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default MainLayout;
