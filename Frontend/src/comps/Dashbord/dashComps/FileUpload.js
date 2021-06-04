import React , {useState} from 'react'
import { makeStyles , withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import axios from 'axios'
import SideBar from '../sideBar'
import '../Styles.css'


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40vw',
      
    },
  },
  
}));



const Progress = ({ percentage }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

const Message = ({ msg }) => {
  return (
    <div className='alert alert-info alert-dismissible fade show' role='alert'>
      {msg}
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

const FileUpload = () => {

  const classes = useStyles();
  const [filiere, setFiliere] = useState('');
  const [value, setValue] = useState('1');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  
  const handleChange = (event) => {
    setFiliere(event.target.value);
    console.log(filiere);
  };
  const handleChangeS = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const onChangeF = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
      <div className="dashBoard">
        <div className="sidebar-container">
            <SideBar />
        </div>
        <div className="dashboard_container">
          <form className={classes.root} onSubmit={onSubmit} noValidate autoComplete="off">
          
            <TextField id="outlined-basic" label="Titre de Cour" variant="outlined" />
    
 
              <InputLabel id="demo-customized-select-label">Filiere</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={filiere}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>Lycée Technique</em>
                </MenuItem>
                <MenuItem value='TC'>TC</MenuItem>
                <MenuItem value='PBac'>1Bac</MenuItem>
                <MenuItem value='DBac'>2Bac</MenuItem>
                <MenuItem value=""><em>Brevet de Technicien Supérieur</em></MenuItem>
                <MenuItem value='DSI'>DSI</MenuItem>
                <MenuItem value='CG'>CG</MenuItem>
              </Select>
       
            
              <FormLabel component="legend">Semaistre</FormLabel>
              <RadioGroup aria-label="Semaistre" name="semaistre" value={value} onChange={handleChangeS}>
                <FormControlLabel value="1" control={<Radio />} label="Semaistre 1" />
                <FormControlLabel value="2" control={<Radio />} label="Semaistre 2" />
              </RadioGroup>
              <TextField type='file' id="outlined-basic" label="" variant="outlined" onChange={onChangeF} />
              
                <label className='custom-file-label' htmlFor='customFile'>
                  {filename}
                </label>

                <Progress percentage={uploadPercentage} />

                </form>
          
                {uploadedFile ? (
                <div className='row mt-5'>
                  <div className='col-md-6 m-auto'>
                    <h3 className='text-center'>{uploadedFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                  </div>
                </div>
                ) : null}

              <Button type='submit' variant="outlined">Ajouter</Button>
          
        </div>     
    </div>
  ) 
}

export default FileUpload

{/* <form>
            <label forInput="filiere">Filiere</label>
            <input type="text" />
            <label forInput="titreCour">Titre de Cour</label>
            <input type="text" />
            <label forInput="filiere">Semaistre 1</label>
            <input type="radio" name="semestre" value="1" />
            <label forInput="filiere">Semaistre 2</label>
            <input type="radio" name="semestre" value="2" />
          </form> */}