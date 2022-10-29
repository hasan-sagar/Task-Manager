import React, { useEffect } from "react";
import {
  AiOutlineEdit,
  AiOutlineCalendar,
  AiOutlineDelete,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { TaskListByStatus } from "../../apiRequest/APIRequest";
import DeletAlert from "../../helper/DeleteAlert";
import { UpdateToDO } from "../../helper/UpdateAlert";

function Progress() {
  useEffect(() => {
    TaskListByStatus("Progress");
  }, []);

  const DeleteTask = (id) => {
    DeletAlert(id).then((res) => {
      if (res === true) {
        window.location.href = "/progress";
      }
    });
  };
  const ProgressTaskList = useSelector((state) => state.task.Progress);

  const StatusChangeItem = (id, status) => {
    UpdateToDO(id, status).then((result) => {
      if (result === true) {
        window.location.href = "/progress";
      }
    });
  };
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {ProgressTaskList.map((list, i) => (
          <div className="bg-white rounded-lg shadow" key={i}>
            <div className="flex justify-between p-5">
              <div className="space-y-1">
                <div className="flex space-x-3">
                  <h4 className="font-semibold">{list.title}</h4>
                  <div className="bg-yellow-300 text-blue-900 rounded-full px-2 py-1 text-xs">
                    {list.status}
                  </div>
                </div>
                <h5 className="text-sm text-gray-400">{list.description}</h5>
              </div>
              <div>
                <a onClick={StatusChangeItem.bind(this, list._id, list.status)}>
                  <AiOutlineEdit />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  text-sm">
              <div className="py-3 flex justify-center items-center space-x-2 ">
                <AiOutlineCalendar />
                <span>{list.createdDate}</span>
              </div>
              <div className="py-3 flex justify-center items-center space-x-2 text-red-500 cursor-pointer">
                <a onClick={DeleteTask.bind(this, list._id)}>
                  <AiOutlineDelete />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Progress;
