import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../Redux/actions";
import useFetch from "../Fetch/FetchPeople";
export const Pages= () => {
  const {refetchData } = useFetch();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.searchTerm);
  const handleChange = (event, value) => {
    dispatch(updatePage(value));
    refetchData()
  };

    return(<Grid container justifyContent="center">
        <Pagination count={10} color="secondary" shape="rounded" page={page} onChange={handleChange}/>
      </Grid>);
}