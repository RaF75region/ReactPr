import React, { useState, useEffect, useRef, Component } from 'react';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import Button from '@mui/material/Button';

import ChatWindow from './ChatWindow';
import ChatInput from './InputData';
import { Hub, RemoveDoneRounded, Task, TrendingUpOutlined } from '@mui/icons-material';
import Message from './Message';
import InputData from './InputData';
import Chat from './Chat';

//const [ connection, setConnection ] = useState(null);

const sendMessage = async (user,message)=>{
            const chatMessage={
                user: user,
                message: message,
            };
}


export class TestPage extends Component{
    static displayName = TestPage.name;    

    constructor(props) {
        super(props);
        this.state={
            connection:null, 
            loading: true,
            listMessage: [],
            user:'',
            message:'',
        }
        this.connectHub = this.connectHub.bind(this);
    }
    
    

    componentDidMount(){
       // this.connectHub();
    }
    
    async connectHub(){
        let conn = new HubConnectionBuilder()
            .withUrl('https://localhost:7159/hubtest')
            .withAutomaticReconnect()
            .build()
            .start()
            .then(e=>{
                console.log("Connected", conn);      
            })
            .catch(e=>console.log("Error ", e));
        
        this.setState({
            connection: conn,
            loading:false
        });
        console.log("Test", this.state.loading);
    }

    async sendMessage(user,message){
        //if(this.connection.connectionStarted){
            this.state.connection.on('ReceiveMessage',(user,message)=>{
                console.log(user + " : " + message);
                //const updatedChat=[...this.listMessage.current];
                //updatedChat.push(user+" : "+message);
            })
            .then(()=>console.log("Regester start"));
            //await this.connection.send('ReceiveMessage',user,message);

       // }
    }

    render(){
        /*let content = this.state.loading ? <p>loading...</p> : 
            <p>Коннект успешен</p>*/
        //let messages=this.listMessage.map((listMessage)=><li>{listMessage}</li>)
        return (
            <div>
                <Chat/>
                
            </div>
        );
    }
}