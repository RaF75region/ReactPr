import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='page'>
        <NavMenu />
        <main>
          <div className='top-row px-4'>
              <a href="logon">Sign/Registre</a>
          </div>
            
          <Container fluid={true}>
            {this.props.children}
          </Container>
          
        </main>
      </div>
    );
  }
}
