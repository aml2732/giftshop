import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Nav,

} from 'react-bootstrap'


class AppNavigation extends Component{
  render(){
    return (<div>
      <Nav className="justify-content-center" >
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>)
  }
}


export default AppNavigation;
