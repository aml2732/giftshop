import React, { Component } from 'react';

import Categories from './Categories';

import {Row, Col} from 'react-bootstrap';


class Home extends Component{
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, categories: [] };
  }

  componentDidMount() {
    fetch("/v1/categories")
      .then(res => res.json())
      .then(
        (result) => { this.setState({ isLoaded: true, categories: result.categories }); },// success handling
        (error) => {  this.setState({ isLoaded: true, error });  } // Error handling
      )
  }

  render(){
    let { error, isLoaded, categories } = this.state;
    return (<div>
        <Row>
          {categories.map((pc)=><Col><Categories name={pc.name} description={pc.description} imgsrc={pc.imgsrc} linkto={pc.linkto} /></Col>)}
        </Row>
      </div>)
  }
}


export default Home;
