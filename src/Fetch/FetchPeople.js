import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatePeople,updateCount } from "../Redux/actions";

export default function useFetch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm);
  const people = useSelector((state) => state.people);
  const page = useSelector((state) => state.page);
  const stringPage = page.toString();
    useEffect(() => {
        const fetchData = async () => {

            const searchURL = searchTerm === ''? `https://swapi.dev/api/people/?page=${stringPage}` : `https://swapi.dev/api/people/?search=${encodeURIComponent(searchTerm)}`;
            try {
                const response = await fetch(searchURL);
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const myResponse = await response.json();
                dispatch(updatePeople(myResponse.results));
                dispatch(updateCount(myResponse.count));
            } catch (error) {
                console.error(`Failed to fetch: ${error}`);
                dispatch(updatePeople([]));
            }
        };

        fetchData();
    }, [searchTerm, page, dispatch]); 
    const refetchData = () => {

    };

    return { people, searchTerm, refetchData };
}
