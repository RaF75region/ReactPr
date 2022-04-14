import { Toolbar } from '@mui/material';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Tbar from './Tollbar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='page'>
        <NavMenu />
        <main>
          <div className='top-row px-4'>
              <Tbar />
          </div>
            
          <Container fluid={true}>
            {this.props.children}
          </Container>
          
        </main>
      </div>
    );
  }
}
