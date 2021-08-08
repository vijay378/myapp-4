
import {Navbar, Nav, Button, NavDropdown, NavItem,FormControl,Form, Dropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from '../AddedPage/Home';
import About from '../AddedPage/About';
import Courses from '../AddedPage/Courses';
import Faculty from '../AddedPage/Faculty';
import Academic1 from '../AddedPage/AcademicSection/Academic1';
import Academic2 from '../AddedPage/AcademicSection/Academic2';
import Academic3 from '../AddedPage/AcademicSection/Academic3';
import Academic4 from '../AddedPage/AcademicSection/Academic4';

import './NavBar.css'

function NavBar() {
  
    return(
        <>
        <Router>
        <Navbar expand="lg" className="nav-background-decoration">
        <LinkContainer to="/">
        <Navbar.Brand><span style={{fontSize:"50px", color:"red"}}>ABC - Institute</span></Navbar.Brand>
        </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    <LinkContainer to="/home">
    <Nav.Link><span style={{color:"#353231", fontSize:"25px"}}>Home</span></Nav.Link>
    </LinkContainer>
      
      <LinkContainer to="/about">
      <Nav.Link><span style={{color:"#353231", fontSize:"25px"}}>About Us</span></Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/faculty">
      <Nav.Link><span style={{color:"#353231", fontSize:"25px"}}>Faculty</span></Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/courses">
      <Nav.Link><span style={{color:"#353231", fontSize:"25px"}}>Courses</span></Nav.Link>
      </LinkContainer>

      <Dropdown>
      
  
  <Dropdown.Toggle style={{backgroundColor:"transparent", 
  border:"none",boxShadow:"none",marginTop:"3px",color:"#353231", fontSize:"25px"
  , fontVariant:"smallCaps", fontWeight:"1000"}}
  >
  
  Academic Activity</Dropdown.Toggle>
  

  <Dropdown.Menu style={{backgroundColor:"#C5F03E"}}>
    
    <Dropdown.Item>
    <LinkContainer to="/academic1">
      <Nav.Link><span style={{color:"magenta"}}><b>Academic Activity 1</b></span></Nav.Link>
      </LinkContainer>
    </Dropdown.Item>
    <Dropdown.Item>
    <LinkContainer to="/academic2">
      <Nav.Link> <span style={{color:"magenta"}}><b>Academic Activity 2</b></span></Nav.Link>
      </LinkContainer>
    </Dropdown.Item>
    <Dropdown.Item>
    <LinkContainer to="/academic3">
      <Nav.Link><span style={{color:"magenta"}}><b>Academic Activity 3</b></span></Nav.Link>
      </LinkContainer>
    </Dropdown.Item>
    <Dropdown.Item>
    <LinkContainer to="/academic4">
      <Nav.Link><span style={{color:"magenta"}}><b>Academic Activity 4</b></span> </Nav.Link>
      </LinkContainer>
    </Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
    
      </Nav>
      </Navbar.Collapse>
      </Navbar>


        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/courses"><Courses/></Route>
          <Route path="/faculty"><Faculty/></Route>
          <Route path="/academic1"><Academic1/></Route>
          <Route path="/academic2"><Academic2/></Route>
          <Route path="/academic3"><Academic3/></Route>
          <Route path="/academic4"><Academic4/></Route>
          <Route path="/academic"></Route>
          </Switch>
        </Router>
        </>
        
      
        
     
    )
}


export default NavBar;