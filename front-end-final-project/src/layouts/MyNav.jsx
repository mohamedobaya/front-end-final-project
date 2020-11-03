import React from 'react';
import { Navbar ,Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom';

export const MyNav = (props)=>(
  <Navbar className="navbar py-4 " bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
            <img style={{width : '50%' , height : '50%' }} src={props.settings["site.logo"]} alt="E-business logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navbar-item" href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
              <Nav.Link className="navbar-item" href="#home">Our Blog</Nav.Link>
              <Nav.Link className="navbar-item" href="#link">About us</Nav.Link>
              <Nav.Link className="navbar-item" href="#home">Free talks</Nav.Link>
              <Nav.Link className="navbar-item" href="#link">Companies</Nav.Link>
              <Nav.Link className="navbar-item" href="#link">Login</Nav.Link>
              <NavDropdown title={<span className="navbar-item">Categories</span>} id="basic-nav-dropdown">
                {props.categories.map(
                  (category) => <NavDropdown.Item key={category.id} 
                                                  href="#action/3.1"
                                                  className="navbar-item">{category.category_name}</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
  </Navbar>
);
export default Nav;