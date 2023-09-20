import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
    // console.log("test");
  };

  return (
    <>
      <Header sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar} />
      <div className="grid md:grid-cols-6 sm:grid-col-1 ">
        <div className="md:col-span-1 ">
          <Sidebar
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
        </div>
        <div className="md:col-span-5 col-span-6">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
