import axios from "axios";
import React, { useState } from "react";
import {RxCross2} from "react-icons/rx"
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, popupData, setUpdateUI }) => {
  const [input, setInput] = useState(popupData.text);

  const updateTodo = () => {
    axios
      .put(`${baseURL}/update/${popupData.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
      setShowPopup(false);
  };
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross2 onClick={() => setShowPopup(false)} />
        <h1>Update Todo</h1>

        <div className="popup__input_holder">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update ToDo.."
          />
          <button onClick={updateTodo }>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
