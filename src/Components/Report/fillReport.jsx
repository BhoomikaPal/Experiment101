import React from "react";
import "./fillReport.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    wt, target,actual  
  ) {
    return { name, calories, fat, carbs, protein,wt, target,actual };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0,15,15,15),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3,15,15,15),
    createData('Eclair', 262, 16.0, 24, 6.0,15,15,15),
    createData('Cupcake', 305, 3.7, 67, 4.3,15,15,15),
    createData('Gingerbread', 356, 16.0, 49, 3.9,15,15,15),
  ];

export default function FillReport() {
    return (
        <div >
            <div className="reportHome">
                <p> Fill Report </p>
            </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Salary Code</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Job Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">UOM</TableCell>
              <TableCell align="left">Wt&nbsp;(g)</TableCell>
              <TableCell align="left">Target</TableCell>
              <TableCell align="left">Actual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">{row.wt}</TableCell>
                <TableCell align="left" style={{ width: "100px", height: "25px" }}>{<TextField id="standard-basic" variant="standard" />}</TableCell>
                <TableCell align="left" style={{ width: "100px", height: "25px" }}>{<TextField id="outlined-basic" variant="outlined" />}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }