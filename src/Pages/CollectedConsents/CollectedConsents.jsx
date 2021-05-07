import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { getConsents } from '../../store/consents/slice';

import styles from './CollectedConsents.module.scss';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'consent', label: 'Consent given for', minWidth: 250 },
];

// const rows = [
//   {
//     id: 1,
//     name: 'User Friendly',
//     email: 'user@friendly.com',
//     consents: ['Receive newsletter'],
//   },
//   {
//     id: 2,
//     name: 'User2 Friendly',
//     email: 'user2@friendly.com',
//     consents: ['Receive newsletter', 'Be shown targeted ads'],
//   },
//   {
//     id: 3,
//     name: 'User3 Friendly',
//     email: 'user3@friendly.com',
//     consents: [
//       'Receive newsletter',
//       'Be shown targeted ads',
//       'Contribute to anonymous visit statistics',
//     ],
//   },
// ];

const rowsPerPage = 2;

function CollectedConsents() {
  const dispatch = useDispatch();
  const consents = useSelector((state) => state.consents.data);

  const [page, setPage] = useState(0);
  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage);
  }, []);

  useEffect(() => {
    dispatch(getConsents());
  }, [dispatch]);

  return (
    <div className={styles.table}>
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {consents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((consent) => (
                <TableRow hover key={consent.id}>
                  <TableCell component="th" scope="row">
                    {consent.name}
                  </TableCell>
                  <TableCell>{consent.email}</TableCell>
                  <TableCell>{consent.consents.join(', ')}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={consents.length}
        rowsPerPageOptions={[2]}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

export default CollectedConsents;
