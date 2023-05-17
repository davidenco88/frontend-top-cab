import { useState } from "react";
import Slider from "./components/Slider/Slider";
import data from "./assets/mockdata.json";
import "./App.css";

function App() {
  return <Slider data={data} />;
}

export default App;
