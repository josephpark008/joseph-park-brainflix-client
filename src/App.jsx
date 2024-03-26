import NavHeader from "./components/NavHeader/NavHeader";
import "./App.scss";
import Upload from "./components/UploadPage/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";


export function App() {
  //STATE for videoselection
 
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Home />} />
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  );
}
