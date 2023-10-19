import axios from "axios";
import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupData }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      setUpdateUI((prevState) => !prevState);
      console.log(res.data);
    });
  };

  const updateTodo = () => {
    setPopupData({ text, id});
    setShowPopup(true);
  };

  return (
    <div className="todo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateTodo} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
