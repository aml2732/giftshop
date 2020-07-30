import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Header.css';


class Header extends Component{
  render(){
    return (<Container className="header">
        <Row>
          <Col>
            <h1>Gift Shop</h1>
          </Col>
        </Row>
      </Container>)
  }
}


export default Header;
