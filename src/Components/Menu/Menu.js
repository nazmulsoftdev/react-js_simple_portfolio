import React, { useState } from 'react';
import { Justify } from 'react-bootstrap-icons';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    

    return (
        <Navbar expand="sm">
            <div className="container">
                <NavbarToggler onClick={toggle} className="border border-danger"><Justify className="text-light"/></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/home" className="nav-link text-light">Skill</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/project" className="nav-link text-light">Project</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" className="nav-link text-light">Contact</NavLink>
                </NavItem>
               </Nav>
              </Collapse>
            </div>
        </Navbar>
    );

}


export default Menu