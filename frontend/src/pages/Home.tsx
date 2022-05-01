import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../components/About";

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="h-[80vh] w-full items-center flex justify-center">
        <div className="text-center grid gap-3 p-5 sm:px-20 text-[#b6fff4]">
          <h1 className="text-5xl font-semibold">Welcome</h1>
          <div className="font-light text-xl">
            <p>
              "Information is a source of learning. But unless it is organized,
              processed, and available to the right people in a format for
              decision making, it is a burden, not a benefit."
            </p>
            <p>~ William Pollard</p>
          </div>
          <div className="flex justify-center text-center items-center space-x-3">
            <Link to="/blogs">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#b6fff4", color: "#000a" }}
              >
                Browse
              </Button>
            </Link>
            <Button
              variant="contained"
              onClick={() => setShowModal(!showModal)}
              sx={{ backgroundColor: "#b6fff4", color: "#000a" }}
            >
              About the Author
            </Button>
          </div>
        </div>
      </div>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <About />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Home;
