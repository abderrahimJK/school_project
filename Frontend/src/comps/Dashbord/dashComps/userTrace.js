import React ,{useEffect , useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SideBar from '../sideBar';
import '../Styles.css'

const useStyles = makeStyles({
    table: {
      minWidth: 950,
      marginTop: 0,
    },
  });

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  

const UserTrace = () => {




    const classes = useStyles();
    const [collection, setCollection] = useState([]);


    useEffect(() => {
        const studentCollection = async ()=>{
            await axios.get('http://localhost:5000/listeStudent').then((response)=>{
                if (response && response.data){
                    setCollection(response.data);
                }
            })
        }
    }, [collection])

    return (
        
        <div className="dashBoard">
            <div className="sidebar-container">
                <SideBar />
            </div>

            <div className="dashboard_container">
                <h1>Liste d'etudiants Inscritere:</h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Utilisateur</TableCell>
                            <TableCell align="right">e-mail</TableCell>
                            <TableCell align="right">fonction&nbsp;</TableCell>
                            <TableCell align="right">Carbs&nbsp;</TableCell>
                            <TableCell align="right">Operation&nbsp;</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

export default UserTrace
