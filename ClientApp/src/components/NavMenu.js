import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import List  from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import './NavMenu.css';
import { grid } from '@mui/system';
import Button from '@mui/material/Button';
//import * from '@mui/icons-material/'


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  /*Передать список ПО*/
  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar" light>
          <Container className='NavFlexContainer'>
            <NavbarBrand tag={Link} to="/">ReactPr</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav d-flex flex-column">
                <NavItem>
                  <div>
                    <Button fullWidth={true} variant="text" style={{justifyContent: "flex-start"}} startIcon={<HomeIcon fontSize='large'/>} size="large">
                      <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                    </Button>
                    </div>
                </NavItem>
                <NavItem>
                  <Button fullWidth={true} variant="text" style={{justifyContent: "flex-start"}} startIcon={<InboxIcon fontSize='large'/>} size="large">
                      <NavLink tag={Link} className="text-dark" to="/counter">Справочник</NavLink>
                    </Button>
                </NavItem>
                <NavItem>
                  <Button fullWidth={true} variant="text" style={{justifyContent: "flex-start"}}  startIcon={<MailIcon fontSize='large'/>} size="large">
                      <NavLink tag={Link} className="text-dark" to="/fetch-data">Ресурсы</NavLink>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button fullWidth={true} variant="text" style={{justifyContent: "flex-start"}}  startIcon={<HomeIcon fontSize='large'/>} size="large">
                      <NavLink tag={Link} className="text-dark">Мои персонажи</NavLink>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button fullWidth={true} variant="text" style={{justifyContent: "flex-start"}}  startIcon={<HomeIcon fontSize='large'/>} size="large">
                      <NavLink tag={Link} className="text-dark" to="/test">Тестовая</NavLink>
                    </Button>
                </NavItem>
                
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
