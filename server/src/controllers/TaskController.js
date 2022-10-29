const TaskModel = require("../models/TaskModel");

//create task
const CreateTask = async (req, res) => {
  let bodyData = req.body;
  bodyData.email = req.headers["email"];
  await TaskModel.create(bodyData, (error, data) => {
    if (error) {
      res.status(400).json({ status: "fail", data: error });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//delete task
const DeleteTask = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  TaskModel.remove(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//update status from task
const UpdateTaskStatus = (req, res) => {
  //localhost:5000/tasks/updateTaskStatus/:id/:status
  let id = req.params.id;
  let status = req.params.status;
  let query = { _id: id };
  let bodyData = { status: status };

  TaskModel.updateOne(query, bodyData, (error, data) => {
    if (error) {
      res.status(400).json({ status: "fail", data: error });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//show list by status
const ListTaskByStatus = (req, res) => {
  let email = req.headers["email"];
  let status = req.params.status;

  TaskModel.aggregate(
    [
      { $match: { status: status, email: email } },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          status: 1,
          createdDate: {
            $dateToString: {
              date: "$createdDate",
              format: "%d-%m-%Y",
            },
          },
        },
      },
    ],
    (error, data) => {
      if (data.length > 0) {
        res.status(200).json({ status: "success", data: data });
      } else {
        res.status(400).json({ status: "fail", data: "error" });
      }
    }
  );
};

const TaskStatusCount = (req, res) => {
  let email = req.headers["email"];

  TaskModel.aggregate(
    [
      { $match: { email: email } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ],
    (error, data) => {
      if (error) {
        res.status(400).json({ status: "fail", data: error });
      } else {
        res.status(200).json({ status: "success", data: data });
      }
    }
  );
};

module.exports = {
  CreateTask,
  DeleteTask,
  UpdateTaskStatus,
  ListTaskByStatus,
  TaskStatusCount,
};
