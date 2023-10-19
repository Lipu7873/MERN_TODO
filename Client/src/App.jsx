import { useEffect, useState } from 'react'
import ToDo from './components/ToDo'
import axios from "axios"
import { baseURL } from './utils/constant'
import Popup from './components/Popup'

function App() {
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState("")
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState({})


  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios.post(`${baseURL}/save`,{toDo: input})
    .then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState)
    setInput("")
  })
  .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <h1 className="title">ToDo App</h1>

      <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a ToDo.."
        />
        <button onClick={saveToDo}>Add</button>
      </div>

      <div className="list">
        {toDos.map((el) => (
          <ToDo
            key={el._id}
            text={el.toDo}
            id={el._id}
            setUpdateUI={setUpdateUI}
            setShowPopup={setShowPopup}
            setPopupData={setPopupData}
          />
        ))}
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupData={popupData}
          setUpdateUI={setUpdateUI}
        />
      )}
    </div>
  );
}

export default App
