import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./COMPONENT/Banner/Banner";
import Navbar from "./COMPONENT/Navbar/Navbar";
import Recipies from "./COMPONENT/Recipies/Recipies";
import Cookings from "./COMPONENT/Cookings/Cookings";


function App() {
  const [recipiesData, setRecipiesData] = useState([]); // Fetched recipes
  const [cookingData, setCookingData] = useState([]); // List of recipes being cooked

  // Fetch recipes data
  useEffect(() => {
    fetch("/public/recepies.json")
      .then((res) => res.json())
      .then((data) => setRecipiesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-start md:w-4/5">
        {/* Recipies Component */}
        <div className="w-full md:w-2/3 px-2">
          <Recipies recipiesData={recipiesData} setCookingData={setCookingData} />
        </div>
        
        {/* Cookings Component */}
        <div className="w-full md:w-1/3 px-2">
          <Cookings cookingData={cookingData} />
        </div>
      </div>
    </>
  );
}

export default App;
