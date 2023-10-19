import React, { useContext } from "react";
import Logo from "./Logo";
import Search from "./Search";
// import Images from "./Images";
import { MyContext } from "./Context/Context";
import { NavLink } from "react-router-dom";

export default function Image() {
  const { setShowImages } = useContext(MyContext);

  const handleImagesClick = () => {
    setShowImages(true);
  };

  return (
    <>
      <div className="md:flex  w-full  md:pt-7 bg-white  ">
        <Logo
          pt={"md:pt-3 logopt pl-3"}
          ml={"ml- md:ml-5"}
          mb={""}
          imgW={"w-[30%] md:w-[100%]"}
          imgH={"h-8 md:h-8"}
          textsize={"text-lg"}
        />
        <div className="mtmax"></div>
        <Search
          conW={"w-[85%] sm:w-[70%] lg:w-[50%]"}
          searchmx={"mx-auto md:ml-10 "}
        />
        <div className="flex justify-evenly w-48 mr-4 my-auto maxhide">
          <span class="material-symbols-outlined ">settings</span>
          <span class="material-symbols-outlined">science</span>
          <span class="material-symbols-outlined">apps</span>
          <span class="material-symbols-outlined">account_circle</span>
        </div>
      </div>
      <div className="w-full  md:w-[29%] md:ml-48 md:overflow-visible  hide mx-auto mt-3 md:mt-6 overflow-auto   ">
        <nav className="flex  ">
          <NavLink
            className="list-none md:text-sm  text-lg  py-1 px-4   hover:text-[#1A73E8]"
            to={"/"}
          >
            All
          </NavLink>
          <NavLink
            className="list-none md:text-sm text-lg cursor-pointer pt-1 pb-2 px-4  
                           focus:border-b-4 focus:border-[#1A73E8]  hover:text-[#1A73E8]"
            onClick={handleImagesClick}
            to={"images"}
          >
            Images
          </NavLink>
          <NavLink
            to={"Videos"}
            className="list-none md:text-sm text-lg  py-1 px-4 focus:border-b-4 focus:border-[#1A73E8]  pb-2 hover:text-[#1A73E8]"
          >
            Videos
          </NavLink>
          <NavLink
            to={"Books"}
            className="list-none md:text-sm text-lg  py-1 px-4  focus:border-b-4 focus:border-[#1A73E8] pb-2 hover:text-[#1A73E8]"
          >
            Books
          </NavLink>
          <NavLink
            to={"News"}
            className="list-none md:text-sm text-lg  py-1 px-4  focus:border-b-4 focus:border-[#1A73E8] pb-2 hover:text-[#1A73E8]"
          >
            News
          </NavLink>
          <select className=" select-none border-none outline-none md:text-sm text-lg  py-1 px-4 focus:border-b-4 focus:border-[#1A73E8]  pb-2 hover:text-[#1A73E8]">
            <option>More</option>
            <option>Maps</option>
            <option>Filghts</option>
            <option>Finance</option>
          </select>
        </nav>
      </div>
      <div className="border-b-2  mb-5"></div>
      {/* <Images/> */}
    </>
  );
}
