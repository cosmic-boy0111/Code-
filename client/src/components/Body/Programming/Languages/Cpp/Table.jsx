import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { visuallyHidden } from '@mui/utils';
import load from '../../../../../videos/unboxing.mp4'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import {AppContext} from '../../../../../App'
import { toast } from 'react-toastify'
import { CppContext } from './Cpp';
import { Button } from '@mui/material';
import Problem from './Problem'
import { Theme } from '../../../../Theme';


function createData(title,  tag , difficulty,id) {
  return {
    title,
    difficulty,
    tag,
    id
  };
}


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Problem',
  },
  {
    id: '_id',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'mainTag',
    numeric: true,
    disablePadding: true,
    label: 'Tag',
  },
  {
    id: 'difficulty',
    numeric: true,
    disablePadding: true,
    label: 'Difficulty',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, themeToggler } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={ headCell.id === '_id' ? `` : createSortHandler(headCell.id)}
              style={{
                display : headCell.id === '_id' ? 'none' : 'block'
              }}
            >
              <span style={{color : themeToggler ? Theme.Dark.Color : Theme.Light.Color}} >{headCell.label}</span> 
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  themeToggler : PropTypes.number
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {/* {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : ( */}
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          List Of Problems
        </Typography>
      {/* )} */}

     
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const diff = ['Easy','Medium','Hard']
const col = ['#00e676','#eeff41','#ff6e40']
export default function EnhancedTable() {

  const { rootUser, themeToggler } = useContext(AppContext)
  const {
    rows,
    setRows,
    setToggle,
    setProblem,
    setTag,
    setDifficulty,
    setCase1,
    setCase2,
    setCase3
  }  = useContext(CppContext)

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [problemData, setProblemData] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (row) => {
    console.log(row);
    setProblemData(row)
    setOpen(true)
  };

  
  const getDiff = (diff) =>{
    if(diff === 0){
      return ['Easy'];
    }else if(diff === 1){
      return ['Medium'];
    }

    return ['Hard'];
  }

  const EditProblem =  (row) =>{

    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    if(row.owner._id !== rootUser._id){
      return;
    }

    console.log(row);
    setProblem({
      id : row._id,
      title : row.title,
      description : row.description
    })
    setTag([row.mainTag,...row.subTags])
    setDifficulty(getDiff(row.difficulty))
    setCase1({
      input : row.testCases[0].input,
      output : row.testCases[0].output,
    })
    setCase2({
      input : row.testCases[1].input,
      output : row.testCases[1].output,
    })
    setCase3({
      input : row.testCases[2].input,
      output : row.testCases[2].output,
    })
    setToggle(true)

  }

  const deleteProblem = async (row) =>{
    // console.log(id);
    if(row.owner._id !== rootUser._id){
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    if(!confirm('Want to delete ? ')){
      return
    }
    

    try {
      const res = await fetch(`/cpp/deleteProblem/${row._id}`,{
        method:'POST',
        headers : {
          'Content-Type' : 'application/json'
        }
      })

      setRows(()=>{
        return rows.filter((e)=>{
          return e._id !== row._id;
        })
      })



      console.log(res);
      toast.success('Problem Deleted')
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
    <Problem open={open} setOpen={setOpen} problem={problemData}/>
    <div style={{
      display: rows.length === 0 ? 'flex' : 'none',
      backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
    }}
    className='Empty'
    >
      <video playsInline={true} preload='auto' autoPlay={true} loop={false} muted={true} className='video' >
                <source src={load} type="video/mp4" style={{
                    borderRadius:'5px'
                }}/>
            </video>
    </div>
    <Box sx={{ width: '100%' }} className='table_container' style={{
      display: rows.length === 0 ? 'none' : 'block',
    }}>
      <Paper sx={{ width: '100%', mb: 2 }} className='table_body' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
        boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
      }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            // sx={{ minWidth: 750,borderBottom: "none" }}
            sx={{
              minWidth: 750,
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              themeToggler = {themeToggler}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.title}
                      // selected={isItemSelected}
                      style={{borderBottom:"none"}}
                    >
                      <TableCell >
                      <span style={{color : themeToggler ? Theme.Dark.Color : Theme.Light.Color}} >{index+1} </span> 
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={() => handleClick(row)}
                      >
                        <span style={{color:'#1890ff',cursor:'pointer'}} >{row.title}</span>
                      </TableCell>
                      <TableCell align="right" className='Action'>
                        <span style={{
                          display: rootUser._id === row.owner._id ? 'inline' : 'none'
                        }}>
                          <Button  onClick={()=>EditProblem(row)}>
                            <ModeEditOutlineRoundedIcon />
                          </Button>
                          <Button color="secondary"  onClick={()=>deleteProblem(row)}>
                            <DeleteIcon />
                          </Button>
                        </span>
                      </TableCell>
                      <TableCell align="right"> <span style={{color : themeToggler ? Theme.Dark.Color : Theme.Light.Color}} > {row.mainTag} </span></TableCell>
                      <TableCell align="right"> <span className='diff' style={{
                        backgroundColor: col[row.difficulty]
                      }}>{diff[row.difficulty]}</span> </TableCell>
                      {/* <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[50,100,300,500]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{
            color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
          }}
        />
      </Paper>
      
    </Box>
    </>
  );
}
