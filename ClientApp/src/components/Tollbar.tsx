import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';


function doCalcelation(
    a:number,
    b:number,
){
    return (
        <div>
            <div className='text-primary'> {a+b}</div>   
        </div>
    )
}

const element = ()=>{
    return(
        <div>

        </div>
    );
}

function IconButtonClick(){
    
}


export default function SearchToolBar(anim:boolean){
    const [classAnim,setClassAnim]=React.useState('');
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    dasda
                </Toolbar>
                </AppBar>
              </Box>
    );
};