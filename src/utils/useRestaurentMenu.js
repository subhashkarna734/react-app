import { useState, useEffect } from "react";

const useRestaurentMenu = () => {
    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    useEffect(() => {
        getRestaurentData();
    }, []);

    const getRestaurentData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await res.json();
        setData(json);
    };
    return data;
}

export default useRestaurentMenu;