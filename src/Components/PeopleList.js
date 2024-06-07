import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
//import { updateVechicleURL } from "../Redux/actions";
//import useVehicles from "../Fetch/FetchVehicles";
export const PeopleList = () => {
 // const {refetchData } = useVehicles();
  const people = useSelector((state) => state.people);
  function formatDate(myDate){
    return myDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
}
const dispatch = useDispatch();
const handleClick = (vehicles) => {
  //dispatch(updateVechicleURL(vehicles));
 // refetchData()
};
  const listItems = people.map((item, index) =>
    <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
            {item.name}
            </TableCell>
            <TableCell align="right">{item.height}</TableCell>
        <TableCell align="right">{item.mass}</TableCell>
        <TableCell align="right">{item.gender}</TableCell>
        <TableCell align="right">{formatDate(new Date(item.edited))}</TableCell>
        <TableCell align="right"><Button disabled={!item.vehicles || item.vehicles.length === 0} variant="contained" >Vehicles</Button></TableCell>
    </TableRow>
);


    return (<Grid container justifyContent="center" >
    <TableContainer sx={{ m: 2 }}>
  <Table size="small" aria-label="purchases" >
          <TableHead>
            <TableRow>
              <TableCell align="right">Birth Year</TableCell>
              <TableCell align="right">Eye Color</TableCell>
              <TableCell align="right">Hair Color</TableCell>
              <TableCell align="right">Skin Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {listItems}
        </TableBody>
          </Table>
          </TableContainer>
    </Grid>);
}