import React, { useState, useEffect, useRef } from 'react';
import IUser from './Interface/TestInterface';
import Button from '@mui/material/Button';

const TestInterface=({id,name,myFunction}:IUser)=>{
    return(
        <div>
            <Button  onClick={myFunction}>{name}</Button>
        </div>
    );
}

export default TestInterface;