import React, { useState, useEffect } from "react";
import "./Style.css";
import Createtask from "../Modals/Createtask";
import Card from "../Components/Card";
const Todollist = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let arr = localStorage.getItem("tasklist");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setModal(false);
  };
  const deletetask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("tasklist", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}
const updateTask = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("tasklist", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}
  return (
    <>
      <div className="header text-center">
        <h1>Todo List</h1>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj,index) => (
          <Card taskObj={obj} index={index} deletetask = {deletetask} updateTaskArray = {updateTask}/>
        ))}
      </div>
      <Createtask toggle={toggle} modal={modal} save={saveTask} updateTaskArray={updateTask} />
    </>
  );
};

export default Todollist;
