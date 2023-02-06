import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isopen, setIsOpen] = useState(false);

  interface props {
    open: String;
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isopen);
    console.log(isopen);
  };

  return (
    <div className="h-screen w-full bg-blue-800 mx-auto flex justify-center items-center text-center">
      <button
        onClick={handleClick}
        className="bg-black text-red-300 border border-black px-3 py-1 rounded-md"
      >
        დააჭირე მარიამ...
      </button>
      <Modal open={isopen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
