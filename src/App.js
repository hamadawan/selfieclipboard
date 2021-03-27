import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Graph from './pages/Graph'
import Clipboard from './pages/Clipboard'
import Selfie from './pages/Selfie'
import Footer from './components/Footer'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mr:{
    marginRight: '30px'
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  const history = useHistory()
  const location = useLocation()
  return (
      <div className={classes.root}>
        <AppBar position="static" position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Web Application
            </Typography>
            <Button onClick={()=>history.push("/")} color="inherit" style={{fontWeight: location.pathname=="/" ? 'bold' :'' }}>Graphs</Button>
            <Button onClick={()=>history.push("/clipboard?q=abc123")} style={{fontWeight: location.pathname=="/clipboard" ? 'bold' :'' }} color="inherit">Clipboard</Button>
            <Button onClick={()=>history.push("/selfie")} style={{fontWeight: location.pathname=="selfie" ? 'bold' :'' }} color="inherit" className={classes.mr}>Selfie</Button>
            
          </Toolbar>
        </AppBar>
          <Switch>
            <Route  exact path="/">
              <Graph />
            </Route>
            <Route path="/clipboard">
              <Clipboard />
            </Route>
            <Route path="/selfie">
              <Selfie />
            </Route>
          </Switch>  
      </div>
  );
}

export default App;
