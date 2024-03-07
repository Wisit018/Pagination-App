import "./App.css";
import FoodComponent from "./components/FoodComponent";
import { useState } from "react";
import MenuData from "./data/MenuData.js";
function App() {
  const [foodData, setFoodData] = useState(MenuData);
  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>

    <div className="container">
    {foodData.map((data,index) => {
        return <FoodComponent key={index} {...data}/>
        
        
        })}
    </div>
    </div>
  );
}

export default App;
