import "./App.css";
import FoodComponent from "./components/FoodComponent";
import { useEffect, useState } from "react";
import MenuData from "./data/MenuData.js";
function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);

  const pagination = () => {
    const foodPerPage = 5; // จํานวนข้อมูลต่อหน้า

    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage;

      return MenuData.slice(start, start + foodPerPage);
    });
    return newFood;
  };

  const handlePage = (index) => {
    setPage(index)
  }
  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    // console.log(paginate[1]);
    setFoodData(paginate[page])
  }, [page]);

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>

      <div className="container">
        {foodData.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return(
            <button key={index} 
            onClick={() => handlePage(index)} 
            className={`page-btn ${index === page ? "active-btn" : null}`}
            >{index+1}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
