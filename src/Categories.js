import React, { Component } from 'react';

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Categories extends Component{
  render(){
    return (<Link to={this.props.linkto}><Card className="bg-light text-white card-overlay" style={{maxHeight:'140px', overflow:'hidden'}}>
  <Card.Img src={this.props.imgsrc} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
  </Card.ImgOverlay>
</Card></Link>)
  }
}


export default Categories;
