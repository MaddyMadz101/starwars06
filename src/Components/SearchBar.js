import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../Redux/actions";
import useFetch from "../Fetch/FetchPeople";
export const SearchBar = () => {
  const {refetchData } = useFetch();
  const dispatch = useDispatch();
    const handleSubmit = (event) => {
      event.preventDefault(); 
    }
    const handleChange = (event) => {
      event.preventDefault(); 
      dispatch(updateSearchTerm(event.target.value));
      refetchData()
    }
    return (
      <Grid container justifyContent="right" >
        <Paper
        component="form"
        onSubmit={handleSubmit} 
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search people..."
        inputProps={{ 'aria-label': 'Search people...' }}
        onChange={handleChange}
      />
      <IconButton type="button" disabled sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
        </Paper>
        </Grid>
    );
}
