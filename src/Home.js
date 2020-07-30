import React, { Component } from 'react';

import Categories from './Categories';

import {Row, Col} from 'react-bootstrap';


class Home extends Component{
  render(){

    let presetCategories = [
      {
        name: "Popular",
        description: "Gift ideas popular among all users",
        imgsrc: "categories_popular.png"
      },
      {
        name: "Sci-Fi Guy",
        description: "Gifts for the all around science fiction fan.",
        imgsrc: "categories_scifi.png"
      },
      {
        name: "Bookworm",
        description: "Gifts for the one whose nose is always stuck in a book",
        imgsrc: "categories_bookworm.png"
      },
      {
        name: "Gadget Guru",
        description: "For the Tech savant in your friend group.",
        imgsrc: "categories_gadget.png"
      }
    ];

    return (<div>
        <Row>
          {presetCategories.map((pc)=><Col><Categories name={pc.name} description={pc.description} imgsrc={pc.imgsrc} /></Col>)}
        </Row>


      </div>)
  }
}


export default Home;
