import { Toolbar } from '@mui/material';
import React, { Component, useState } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Tbar from './Tollbar';
import './Layout.css'

export class Layout extends Component {
  static displayName = Layout.name;

  constructor(props){
    super(props);
    this.state={
      anim:true,
    };
  }

  /*Добавить функцию клика а затем передать её в дочерний элемент*/
  toolbarDownUp=()=> {
    this.setState({
      anim: !this.state.anim,
    });
  }


  render () {
    return (
      <div className='page'>
        <div className={this.state.anim?'tool hiden':'tool'}>
          <NavMenu />
        </div>
        <main>
          <div className={'top-row'}>
              <Tbar toolbarDownUp={this.toolbarDownUp}/>
          </div>
            
          <Container fluid={true}>
            {this.props.children}
          </Container>
          
        </main>
      </div>
    );
  }
}
