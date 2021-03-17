import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/AppBar";
import {createMuiTheme} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    appbar:{
        backgroundColor: "#fff",
        padding: "2.5rem"
    },
    
}));
const theme = createMuiTheme({
    palette: {
        primary:{
            main: "#163269"
        },
       
    },
    background: {
        default:"#fff"
    }
})

 
const Fack_App = () => {
    const classes = useStyle();
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography 
                        variant="h6"
                        color="secondary"
                        className={classes.appbar}
                    >
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default Fack_App;
