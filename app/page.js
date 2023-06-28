'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { AuthForm } from '@/components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteUser, fetchUsers } from '@/redux/slices/usersSlice';
import { Button, Pagination } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import io from 'socket.io-client';
// import { getEvents } from '@/redux/slices/eventsSlice';
// const ws = new WebSocket('wss://test.relabs.ru/event')
// const ws = new WebSocket('wss://test.relabs.ru/event')

// import { addEvent, getEvents, eventsReducer, connectWebsocket, setData, connectWebSocket } from '@/redux/slices/eventsSlice';
import {connectWebSocket} from '@/redux/slices/eventsSlice';
import {disconnectWebSocket} from '@/redux/slices/eventsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  
  const [pageLimit, setPageLimit] = useState(5);
  const [pageOffset, setPageOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const socket = io('wss://test.relabs.ru/event');
  // console.log({ws});
  
//   const events = useSelector((state) => state.events.events);
// useEffect(() => {
//   dispatch(getEvents());
// }, [dispatch]);


// console.log({events});

const data = useSelector(state => state.websocket);

useEffect(() => {
  dispatch(connectWebSocket());

  return () => {
    dispatch(disconnectWebSocket());
  };
}, [dispatch]);


console.log({data});
// useEffect(() => {
// ws.addEventListener('message', (e) => {
//   console.log(JSON.parse(e.data));
// })
// }, []);
  // socket.on('connect', function() {
  //   console.log('Соединение установлено');
  // });
  
  // socket.on('message', function(data) {
  //   console.log(`Получено сообщение: ${data}`);
  // });
  
  // socket.on('disconnect', function() {
  //   console.log('Соединение закрыто');
  // });
  
  // socket.on('error', function(error) {
  //   console.log(`Ошибка: ${error}`);
  // });
  // useEffect(() => {

  //   if (users.page === 1) {
  //     setPageOffset(0)
  //   } else {
  //     setPageOffset(prev => prev + pageLimit)
  //   }
  // }, [pageLimit, users.page]);

  useEffect(() => {
    // dispatch(fetchUsers(5, 5))
    dispatch(fetchUsers({ limit: pageLimit, offset: pageOffset }));
  }, [dispatch, pageLimit, pageOffset]);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000); // умножаем на 1000 для перевода в миллисекунды
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому прибавляем 1
    const year = date.getFullYear();
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  // console.log({ users });

  const handlePaginationChange = (event, page) => {
    setPageOffset((page - 1) * pageLimit);
    setCurrentPage(page);
  };

  const deleteUsr = (userId) => {
    dispatch(deleteUser(userId));
  }
  return (
    <main>
      {/* <AuthForm /> */}
      <div>
      {/* {data.map(event => (
        <div key={event.ctime}>{event.event}{event.ctime}</div>
      ))} */}
    </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Имя</TableCell>
              <TableCell align="right">Роль</TableCell>
              <TableCell align="right">Дата создания</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.items?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{formatDate(row.ctime)}</TableCell>
                <TableCell align="right">
                <Button variant="contained" color="secondary" onClick={() => deleteUsr(row.id)}>Удалить</Button>
                  {/* <button onClick={() => deleteUsr(row.id)}>delete</button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(Number(users.total) / Number(pageLimit))}
        page={currentPage}
        onChange={handlePaginationChange}
        color="secondary"
      />
    </main>
  );
}
