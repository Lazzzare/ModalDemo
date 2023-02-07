import React, { useState } from "react";
import "./index.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    alert("hell");
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="modalButton border border-black rounded text-black"
      >
        დააჭირე მარიამ...
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
export default App;
