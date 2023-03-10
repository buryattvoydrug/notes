import { AppBar, Container, Fab, IconButton, Toolbar } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ListIcon from '@material-ui/icons/List';
import ListPage from './pages/ListPage';
import NotePage from './pages/NotePage';
import AddButton from './components/AddButton';

function App() {
  return (
    <>
      <Router>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Container style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <>Заметки</>
              </IconButton>
            </Link>
            <Link to="/notes">
              <IconButton edge="start" color="inherit">
                <ListIcon/>
              </IconButton>
            </Link> 
          </Container>
          
        </Toolbar>
      </AppBar>
      <Container style={{marginTop: "80px"}}>

        <Routes>
            <Route path='/notes' element={<ListPage/>}/>
            <Route path='/' element={<NotePage/>}/>
        </Routes>
        
        <AddButton/>
        
      </Container>
    </Router>
    </>
  );
}

export default App;
