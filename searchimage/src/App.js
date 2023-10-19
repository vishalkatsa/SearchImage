import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./components/Context/Context";
import All from "./components/All";
import Images from "./components/Images";
import Image from "./components/Image";

function App() {
  return (
    <div className="w-screen h-screen">
      <MyContextProvider>
        <BrowserRouter>
          <Image />
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="HomeGoolgeIcon" element={<All />} />
            <Route path="images" element={<Images />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
