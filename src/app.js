import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RestaurentCard from "./components/RestaurentCard";
import { rescard } from "./utils/restaurentdata";
import {useState} from 'react';

const AppLayout = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState(rescard)
  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className="search">
          <SearchBar />
        </div>
        <div
          className="filter-btn"
          onClick={() => {
            const filterData = listOfRestaurants.filter((restaurent) => restaurent.info.avgRating > 4.5);
            setlistOfRestaurants(filterData);
          }}
        >
          Top Rated restaurent
        </div>

        <div className="card-row">
          {listOfRestaurants.map((restaurent) => (
            <RestaurentCard key={restaurent.info.id} data={restaurent} />
          ))}
        </div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
