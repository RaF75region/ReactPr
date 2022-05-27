import React, {Component} from "react";
import Button from '@mui/material/Button' 
import TextField from '@mui/material/TextField'
import './AutentificationStyle.css'

export class AutentificationС extends Component{

    static displayName=AutentificationС.name;

    constructor(props){
        super(props);
        this.state={requests:[], loading:true};
    }

    componentDidMount(){
       
    }

   

    render(){
        
        return(        

            <div className="row">
                <div className="col-3 p-2 col-auth">
                <TextField className="blockauth" label="Логин" variant="outlined" />
                <TextField  className="blockauth" label="Пароль" variant="outlined" InputAdornment={true}/>
                <Button>Click</Button>
                </div>
            </div>
        )
    }
}