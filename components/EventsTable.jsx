'use client';


import { TableTitle, UsersTableWrapper } from "@/styledComponents/styledComponents";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const EventsTable = ({events, formatDate}) => {


  
  return (
    <UsersTableWrapper>
       <TableTitle>События</TableTitle>
       <TableContainer component={Paper} sx={{
          boxShadow: 'none',
         
         minWidth: '100%',
       }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Событие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events?.map((event) => (
              <TableRow
                key={`event-${Math.random(event?.id)}`}
              >
                
                <TableCell align="left">{formatDate(event?.ctime)}</TableCell>
                <TableCell align="left"> {event?.event}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </UsersTableWrapper>
  )
}