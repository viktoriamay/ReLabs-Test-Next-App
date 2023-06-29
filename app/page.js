'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteUser, fetchUsers } from '@/redux/slices/usersSlice';
import { connectWebSocket } from '@/redux/slices/eventsSlice';
import { disconnectWebSocket } from '@/redux/slices/eventsSlice';
import { UsersTable } from '@/components/UsersTable';
import { EventsTable } from '@/components/EventsTable';
import { CircularProgress } from '@mui/material';
import { Container, UsersLoader, TablesWrapper } from '@/styledComponents/styledComponents';

export default function Home() {
  const [pageLimit, setPageLimit] = useState(5);
  const [pageOffset, setPageOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { users, loading } = useSelector((state) => state.users);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWebSocket());

    return () => {
      dispatch(disconnectWebSocket());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers({ limit: pageLimit, offset: pageOffset }));
  }, [dispatch, pageLimit, pageOffset]);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  const handlePaginationChange = (page) => {
    setPageOffset((page - 1) * pageLimit);
    setCurrentPage(page);
  };

  const deleteUsr = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <main>
      {loading ? (
        <UsersLoader>

      <CircularProgress size={100} color="secondary" />
      </UsersLoader> 
      ) : (
        <>
          <Container>
          <TablesWrapper>

            <UsersTable
              users={users}
              deleteUsr={deleteUsr}
              formatDate={formatDate}
              pageLimit={pageLimit}
              currentPage={currentPage}
              handlePaginationChange={handlePaginationChange}
            />
            <EventsTable events={events} formatDate={formatDate} />
          </TablesWrapper>
          </Container>
        </>
      )}
    </main>
  );
}
