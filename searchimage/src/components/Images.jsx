  import React,{useContext} from "react";
import { MyContext } from "./Context/Context";

export default function Images() {
  const { searchedImage } = useContext(MyContext);
  // console.log(searchedImage);
  
  return (
    <div className="w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
    {searchedImage.map((e) => (
        <div key={e.title} className="max-h-48 mb-8">
            <img src={e.image} alt={e.title} className="w-full h-full mb-1 rounded-lg" />
            <h1 className="text-black text-center ">{e.title}</h1>
        </div>
    ))}
</div>
 
  )
}
