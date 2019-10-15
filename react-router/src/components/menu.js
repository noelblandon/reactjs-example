import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Navbar,Nav, Button, Form,FormControl,NavDropdown } from 'react-bootstrap';    
function Menu(){
   
    return(
             
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container fluid="true">
                    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active">Quienes somos</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active"> Contactanos</NavLink>
                        <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                            <NavLink className="dropdown-item"  to="/user">Lista de Usuarios</NavLink>
                            <NavLink className="dropdown-item"  to="/user/create">Crear Nuevo Usuario</NavLink>
                        </NavDropdown>
                    </Nav>
                    {/*<Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form> */}
                </Container>
            </Navbar>
    
    )
}

export default Menu;