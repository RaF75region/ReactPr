import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow from './ChatWindow';
import ChatInput from './InputData';

const Chat = () => {
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    const [stateConnection, setstateConnection] = useState(false);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7159/hubtest')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
        console.log('Connect create');
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                    setstateConnection(true);
                    
                    connection.on('ReceiveMessage', (user,message) => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(user+" : "+message);
                    
                        setChat(updatedChat);
                    });
                    console.log(stateConnection);
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                    setstateConnection(false);
                });
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        console.log(stateConnection);
        if (stateConnection) {
            try {
                await connection.send('SendMessage', user, message);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    const listobj=chat.map((m)=><li>{m}</li>)

    return (
        <div>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;