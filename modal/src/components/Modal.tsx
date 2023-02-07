import React from "react";
import Image from "../assets/img.jpg";
import Swal from "sweetalert2";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const handleClick = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={Image} alt="/" />
        <div className="modalRight">
          <p className="closeBtn cursor-pointer" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p className="">და დააააამ!!!!</p>
            <h1>გილოცავ მარიამ, დღეს შენ</h1>
            <p>ორი მუსიკით დაჯილდოვდი</p>
          </div>
          <div className="flex justify-center gap-4 p-10">
            <a
              target={"_blank"}
              href="https://www.youtube.com/watch?v=zbp6mNzy9bg"
            >
              <button className="bg-blue-500 border-blue-500 rounded-md px-4 py-2">
                <span className="bold">1</span>) სიარული
              </button>
            </a>
            <a
              target={"_blank"}
              href="https://www.youtube.com/watch?v=NFxYVVCd96w"
            >
              <button className="bg-blue-500 border-blue-500 rounded-md px-4 py-2">
                <span className="bold">2</span>) any1
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
