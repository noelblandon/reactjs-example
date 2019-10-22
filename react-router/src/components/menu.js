import React, { Component }  from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


import { NavLink } from 'react-router-dom';

import { Container, Navbar,Nav, NavDropdown } from 'react-bootstrap';    

class Menu extends Component{
    
   
     
    
    handleDropdownClick(){
    
        const el = findDOMNode(this.refs.userDropdown);
        $(el).trigger( "click" );
        
    } 


render() {     
    return(
             
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Container fluid="true">
                    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active">Quienes somos</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active"> Contactanos</NavLink>
                        <NavDropdown title="Usuarios" id="collasible-nav-dropdown" ref="userDropdown">
                            <NavLink className="dropdown-item"  to="/user" onClick={() => this.handleDropdownClick()}>Lista de Usuarios</NavLink>
                            <NavLink className="dropdown-item"  to="/user/create" onClick={() => this.handleDropdownClick()}>Crear Nuevo Usuario</NavLink>
                        </NavDropdown>
                    </Nav>                    
                </Container>
            </Navbar>
    
    )
  }  
}

export default Menu;