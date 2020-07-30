import React, { Component } from 'react';

import Categories from './Categories';

import {Row, Col} from 'react-bootstrap';


class Home extends Component{
  render(){

    let presetCategories = [
      {
        name: "Popular",
        description: "Gift ideas popular among all users",
        imgsrc: "categories_popular.png",
        linkto: "/categories/popular"
      },
      {
        name: "Sci-Fi Guy",
        description: "Gifts for the all around science fiction fan.",
        imgsrc: "categories_scifi.png",
        linkto: "/categories/scifi"
      },
      {
        name: "Bookworm",
        description: "Gifts for the one whose nose is always stuck in a book",
        imgsrc: "categories_bookworm.png",
        linkto: "/categories/book"
      },
      {
        name: "Gadget Guru",
        description: "For the Tech savant in your friend group.",
        imgsrc: "categories_gadget.png",
        linkto: "/categories/tech"
      }
    ];

    return (<div>
        <Row>
          {presetCategories.map((pc)=><Col><Categories name={pc.name} description={pc.description} imgsrc={pc.imgsrc} linkto={pc.linkto} /></Col>)}
        </Row>


      </div>)
  }
}


export default Home;
