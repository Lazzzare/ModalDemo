import React, { useState } from "react";
import "./index.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="modalButton">
        დააჭირე მარიამ...
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
export default App;
