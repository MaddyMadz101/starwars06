import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateVechicles } from "../Redux/actions";

export default function useVehicles() {
/*    const dispatch = useDispatch();
    const vehicleUrl = useSelector((state) => state.vehicleUrl);
  const vehicle = useSelector((state) => state.vehicle);
    useEffect(() => {
        const fetchData = async () => {

            const searchURL = vehicleUrl;
            try {
                const response = await fetch(searchURL);
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const myResponse = await response.json();
                dispatch(updateVechicles(myResponse.results));
            } catch (error) {
                console.error(`Failed to fetch: ${error}`);
                dispatch(updateVechicles([]));
            }
        };

        fetchData();
    }, [vehicleUrl, dispatch]); 
    const refetchData = () => {

    };

    return { vehicle, vehicleUrl, refetchData };*/
}
