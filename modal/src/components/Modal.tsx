import React from "react";
import Image from "../assets/img.jpg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="bg-blue-400 fixed w-full h-full">
      <div className="containeri max-w[600px] w-full fixed top-[40%] left-[50%] flex justify-center mx-auto bg-[white]">
        <div>
          <img src={Image} alt="" />
        </div>
        <p
          className="fixed top-[8px] right-[8px] cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <div className="w-full flex flex-col justify-center text-center">
          <div>
            <p>Do you want</p>
            <h1>20 credit</h1>
            <p>a e i o u</p>
          </div>
          <div>
            <button>es minda</button>
            <button>esec minda</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
