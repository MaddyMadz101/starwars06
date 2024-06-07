import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import useFetch from "./Fetch/FetchPeople";
import { PeopleList } from "./Components/PeopleList";
import { SearchBar } from "./Components/SearchBar";
import { Pages } from "./Components/Pages";
 
export default function App() {
  const count = useSelector((state) => state.count);
  useFetch();
  return (
    
    <Box sx={{ flexGrow: 2 }}>
   
      <Grid container spacing={2} sx={{ m: 2 }}>
        
        <Grid xs={2}></Grid>
        <Grid xs={8} >
          <SearchBar /> 
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <Typography sx={{ mb: 2 }}> People</Typography>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
        <Grid xs={8} >
          <PeopleList />
          {count > 10 && <Pages />}
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
}

