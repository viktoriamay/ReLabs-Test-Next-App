'use client';

import {
  TableTitle,
  UsersTableWrapper,
} from '@/styledComponents/styledComponents';
import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const UsersTable = ({ users, deleteUsr, formatDate }) => {
  return (
    <UsersTableWrapper>
      <TableTitle>Список пользователей</TableTitle>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: '100%',
          boxShadow: 'none',
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Имя</TableCell>
              <TableCell align="center">Роль</TableCell>
              <TableCell align="center">Дата создания</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.items?.map((user) => (
              <TableRow key={`user-${Math.random(user?.id)}`}>
                <TableCell component="th" scope="row">
                  {user?.id}
                </TableCell>
                <TableCell align="center">{user?.name}</TableCell>
                <TableCell align="center">{user?.role}</TableCell>
                <TableCell align="center">{formatDate(user?.ctime)}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUsr(user?.id)}
                    sx={{
                      textTransform: 'capitalize',
                    }}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </UsersTableWrapper>
  );
};
