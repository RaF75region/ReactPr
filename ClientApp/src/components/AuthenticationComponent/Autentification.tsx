import React, { useState, useEffect, useRef } from 'react';
import IUser from './IUser'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Modal from '@mui/material/Modal';
import DialogContentText from '@mui/material/DialogContentText';

export default function Autentification(props:any){
    /*const [open,setOpen]=useState(Boolean);
    
    const handleClose=()=>{
        setOpen(false);
    }
    */
    return(
        <Dialog
        open={props.open}
        onClose={()=>props.close(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <DialogTitle id="alert-dialog-title">
          Авторизация
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
            
      </Dialog>
    );
}