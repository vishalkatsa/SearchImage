import React, { useState, useContext } from "react";
import bikeb from "./image/bike-bajaj.jpeg";
import bikeh from "./image/bike-hero.jpeg";
import bikehonda from "./image/bike-honda.jpeg";
import bikeola from "./image/bike-ola.jpeg";
import biketvs from "./image/bike-tvs.jpeg";
import carbmw from "./image/car-bmw.jpeg";
import partyapp from "./image/party-app.jpeg";
import partybjp from "./image/party-bjp.jpeg";
import micicon from "./googlemic.png";
import googlelens from "./Google Lens.png";
import { MyContext } from "./Context/Context";

export default function Search(props) {
  const [searchiteam, setsearchiteam] = useState("");
  const { setSearchedImage } = useContext(MyContext);
  const { showImages } = useContext(MyContext);

  let Images = [
    {
      title: "Bike bajaj",
      image: bikeb,
      // file: png ,
    },
    {
      title: "Bike hero",
      image: bikeh,
      // file: png ,
    },
    {
      title: "Bike honda",
      image: bikehonda,
      // file: png ,
    },
    {
      title: "Bike ola",
      image: bikeola,
      // file: png ,
    },
    {
      title: "Bike tvs",
      image: biketvs,
      // file: png ,
    },
    {
      title: "Car BMW",
      image: carbmw,
      // file: png ,
    },
    {
      title: "Party APP",
      image: partyapp,
      // file: png ,
    },
    {
      title: "Party BJP",
      image: partybjp,
      // file: png ,
    },
  ];
  const searchclick = () => {
    if (showImages === true && searchiteam !== "") {
      const filteredImages = Images.filter((value) => {
        return value.title.toLowerCase().includes(searchiteam.toLowerCase());
      });

      setSearchedImage(filteredImages);
    }
    // console.log(filteredImages);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search when Enter key is pressed
      searchclick();
    }
  };
  return (
    <>
      {/* <div className="container w-full pt-56 mx-auto"> */}
      <div
        className={`${props.conW} h-12 ${props.searchmx}	 pl-4  bg-white border-t shadow-lg  rounded-full flex items-center`}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchiteam}
          onChange={(e) => setsearchiteam(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-[100%] h-11 px-4 outline-none rounded-tl rounded-bl"
        />
        <button className="w-4 h-5 mx-2">
          <img className="" src={micicon} alt="mic"></img>
        </button>

        <button className="w-7 h-8 mx-3">
          <img className="" src={googlelens} alt="Google Lens"></img>
        </button>

        <button className="pr-5 ml-2" onClick={searchclick}>
          <i
            className="fa-solid fa-magnifying-glass  fa-sm"
            style={{ color: "#146aff" }}
          ></i>
        </button>
      </div>
      {/* </div> */}
      {/* <div>
      {searchedImage.map((e) => (
            <div key={e.title}>
              <img src={e.image} alt={e.title} />
              <h1>{e.title}</h1>
              {console.log(e.title)}
            </div>
          ))}
      </div> */}
    </>
  );
}
