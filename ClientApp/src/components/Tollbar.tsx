import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const SearchToolBar =(props: { toolbarDownUp: () => void; })=>{

    return(
        <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={()=>props.toolbarDownUp()}
                    >
                    <MenuIcon />
                </IconButton>
                dasda
            </Toolbar>
            </AppBar>
          </Box>
    )
};

export default SearchToolBar;