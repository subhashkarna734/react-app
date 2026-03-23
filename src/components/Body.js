import { useState, useEffect } from 'react';
import Shimmer from '../components/Shimmer';
import RestaurentCard from '../components/RestaurentCard';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  const [searchText, SetsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const res = await data.json();
    const restaurants = res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurants)
    setlistOfRestaurants(restaurants);
    setFilterRestaurent(restaurants);
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>You are offline! please check your internet connections.🔴</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center">
      <div className="flex">
        <div className="justify-center">
          <div className="justify-center ml-20 border-spacing-0">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
              placeholder="Search for restaurants and food"
              autoFocus=""
              maxLength="200"
              value={searchText}
              onChange={(e) => {
                SetsearchText(e.target.value);
              }}
            ></input>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => {
                const filterData = listOfRestaurants.filter((restaurent) =>
                  restaurent.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase()),
                );
                if (filterData.length > 0) {
                  setFilterRestaurent(filterData);
                } else {
                  return <h1>No match found</h1>;
                }
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-300 rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
        onClick={() => {
          const filterData = listOfRestaurants.filter(
            (restaurent) => restaurent.info.avgRating > 4.5,
          );
          setFilterRestaurent(filterData);
        }}
      >
        Top Rated restaurent
      </div>

      <div className="flex flex-wrap gap-6 m-10 p-10 w-50 h-50 cursor-pointer">
        {/* {filterRestaurent.map((restaurent) => (
            <RestaurentCard key={restaurent.info.id} data={restaurent} />
          ))} */}
        {filterRestaurent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={`/restaurant/${restaurent.info.id}`}
          >
            <RestaurentCard data={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;