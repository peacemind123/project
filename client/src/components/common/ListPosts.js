import React, {memo} from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListPosts = ({handleDelete, posts}) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: '8px' }}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><b>Title</b></TableCell>
              <TableCell align="left"><b>Description</b></TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {(posts && posts.length) ? posts.map((row) => (
              <TableRow
                key={row._id}
              >
                <TableCell component="th" scope="row">
                  {row.posttitle}
                </TableCell>
                <TableCell align="left">{row.postcontent}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(row._id)} size="small">Delete</Button>
                </TableCell>
              </TableRow>
            )): (
                <TableRow>
                     <TableCell component="th" scope="row" colSpan={3} >
                        <Typography variant="subtitle1" align="center" sx={{fontSize: '14px', fontWeight: 600}}>
                            No Posts found
                        </Typography>
                     </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default memo(ListPosts);