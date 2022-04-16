import * as React from 'react'
import { useState } from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import { Home } from './Home';
import { IconButton } from '@mui/material';

export default function (){
    const [menu_list,setMenuList] = useState([]);
    
    let list: number[] = [1, 2, 3];


    return(
        <div>
        <MenuList>
                <MenuItem LinkComponent={Home}>
                    <Button  >
                        Homes
                    </Button>
                </MenuItem>
                <MenuItem 
                 href='/counter'>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Counter</Typography>
                </MenuItem>
                <MenuItem>
                <NavItem>
                  <NavLink  className="text-dark" to="/testpage">Test Page</NavLink>
                </NavItem>
                </MenuItem>
            </MenuList>
        </div>
    );
};