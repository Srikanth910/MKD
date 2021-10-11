import React,{FC} from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ButtonComponent from '../UI/components/Button/Button';

interface Data {
  first_name: string,
  last_name: string,
  dateof_birth: string,
  member_id: string,
  address: string,
  status: string,
  effective_date: string,
  term_date: string,
  company: string,
  lineof_business: string,
  plan_code: number,
  plan_desc: string,
  contract_number: string,
  pbp_number: string,
  pcp: string,
  pcp_name: string,
  ipa_code: string,
  ipa_name: string
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: any[];
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const classes = useStyles();
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (

    <TableHead className={classes.thead}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.first_name ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={classes.thead}
            >
              {headCell.label}

            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  tablecell: {
    padding: "0px",
    fontSize: "12px",
    fontFamily: "serif",
    textAlign: "center",
  },
  // selectbtn: {
  //   textTransform: "none",
  //   backgroundColor: "#0b1963",
  //   padding: "3px 11px",
  //   fontSize: "12px",
  // },
  thead: {
    height: "0px",
    backgroundColor: "#0b1963",
    color: "white",
    fontSize: "10px",
    fontFamily: "serif",
    fontWeight: 700,
    textAlign: "center",
    "&:hover": {
      color: "white",
    },
  },
  table: {
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  },
}));


interface IProps {
  rows: any[];
  headCells: any[];
  rowsshow: boolean;
  handlerowdata: any;
  IcdModal: boolean;
}
const DataTable:FC<IProps> = ({ rows, headCells, rowsshow, handlerowdata, IcdModal }) => {
  const classes = useStyles();
  const history = useHistory();
  const [order, setOrder] = React.useState<Order>('desc');
  const [orderBy, setOrderBy] = React.useState<any>([rows]);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: { name: any; }) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: Data | any) => {
    e.preventDefault();
    if (IcdModal) {
      handlerowdata(row);
    } else {
      history.push({ pathname: "/medical-pa", state: { rowdata: row } });
    }

  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer style={{ borderRadius: "5px" }}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells} />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  console.log(row)
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.tablecell}
                    >
                      {row.first_name && (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          className={classes.tablecell}
                        >
                          <ButtonComponent
                            color="primary"
                            variant="contained"
                            btn="selectbtn"
                            handleSubmit={(e:any) => handleSelect(e, row)}
                          >
                            Select
                          </ButtonComponent>
                        </TableCell>
                      )}
                      <TableCell align="center" className={classes.tablecell}>
                        {row.first_name}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.last_name}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.dateof_birth}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.member_id}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.address}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.status}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.effective_date}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.term_date}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.company}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.lineof_business}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.plan_code}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.plan_desc}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.contract_number}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.pbp_number}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.pcp}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.pcp_name}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.ipa_code}
                      </TableCell>
                      <TableCell align="center" className={classes.tablecell}>
                        {row.ipa_name}
                      </TableCell>
                    </TableRow>
                  );
                })}

            </TableBody>
          </Table>
        </TableContainer>
        {rowsshow && (
          <TablePagination
            rowsPerPageOptions={[2, 5]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </div>

  );
}
export default DataTable;